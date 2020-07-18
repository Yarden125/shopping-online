import { Component, OnInit, OnDestroy } from '@angular/core';
import { Cart } from 'src/app/models/cart';
import { CartItem } from 'src/app/models/cartItem';
import { Unsubscribe } from 'redux';
import { NgRedux } from 'ng2-redux';
import { AppState } from 'src/app/redux/appState';
import { CartsItemsService } from 'src/app/services/carts-items.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Customer } from 'src/app/models/customer';
import { City } from 'src/app/models/city';
import { CitiesService } from 'src/app/services/cities.service';
import { Order } from 'src/app/models/order';
import { CustomersService } from 'src/app/services/customers.service';
import { CartsService } from 'src/app/services/carts.service';
import { OrdersService } from 'src/app/services/orders.service';
import { PopupOrderConfirmationComponent } from '../popup-order-confirmation/popup-order-confirmation.component';
import { NgbModalOptions, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Action } from 'src/app/redux/action';
import { ActionType } from 'src/app/redux/actionType';

@Component({
  selector: 'app-order-page',
  templateUrl: './order-page.component.html',
  styleUrls: ['./order-page.component.css']
})
export class OrderPageComponent implements OnInit, OnDestroy {

  public modalOptions: NgbModalOptions;
  public cart: Cart;
  public cartsItems: CartItem[];
  public unsubscribe: Unsubscribe;
  public beforeOrder: boolean = false;
  public customer: Customer;
  public cities: City[];
  public order: Order;
  public totalAmount: number;
  public currentDate: string;
  public selectedDate: Date;
  public isZero: boolean = false;

  public constructor(
    private modalService: NgbModal,
    private redux: NgRedux<AppState>,
    private cartsItemsService: CartsItemsService,
    private citiesService: CitiesService,
    private customersService: CustomersService,
    private activatedRoute: ActivatedRoute,
    private ordersService: OrdersService,
    private cartsService: CartsService,
    private router: Router) {
    this.order = new Order();
    this.modalOptions = {
      backdrop: 'static',
      keyboard: false,
      backdropClass: 'customBackdrop'
    };
  }

  // Invoked at the beginning of the component's lifecycle:
  public ngOnInit(): void {
    // if customer is logged in:
    if (this.isCustomerLoggedIn()) {
      this.getCurrentDate();
      this.subscribeToStore();
      const cartID = this.activatedRoute.snapshot.params.cartID;

      // get all carts items:
      if (this.redux.getState().cartsItems.length === 0) {
        this.cartsItemsService.getAllCartsItemsByCartID(cartID);
      }

      // get cart:
      this.getCart(cartID);

      // get all cities:
      if (this.redux.getState().cities.length === 0) {
        this.citiesService.getAllCities();
      }

      // get customer:
      if (this.cart !== undefined) {
        this.customersService.getOneCustomer(this.cart.customer._id);
      }
    }

    // if customer is not logged in:
    else {
      this.logout();
    }
  }

  // Subscribe to store:
  public subscribeToStore(): void {
    this.unsubscribe = this.redux.subscribe(() => {
      this.cart = this.redux.getState().cart;
      this.cartsItems = this.redux.getState().cartsItems;
      this.customer = this.redux.getState().customer;
      this.cities = this.redux.getState().cities;
      this.totalAmount = this.redux.getState().totalAmount;
      if (this.customer !== null) {
        this.order.city = this.customer.city;
        this.order.street = this.customer.street;
        this.order.houseNumber = this.customer.houseNumber;
      }
    });
  }

  // Check if customer is logged in:
  public isCustomerLoggedIn(): boolean {
    return sessionStorage.getItem("customer") !== null;
  }

  // Unsubscribe to store - Invoked a moment before the component's lifecycle ends:
  public ngOnDestroy(): void {
    if (this.unsubscribe) {
      this.unsubscribe();
    }
  }

  // Calculate total amount to pay:
  public calculateTotalCartAmount(): number {
    let sum = 0;
    for (let i = 0; i < this.cartsItems.length; i++) {
      sum += this.cartsItems[i].price;
    }
    return sum;
  }

  // Get cart:
  public getCart(cartID: string): void {
    if (this.cart === undefined) {
      this.cartsService.getOneCartByCartID(cartID);
    }
    else {
      this.cart = this.redux.getState().cart;
    }
  }

  // get current date:
  public getCurrentDate(): void {
    let today = new Date();
    let dd = ("0" + today.getDate()).slice(-2);
    let mm = ("0" + (today.getMonth() + 1)).slice(-2);
    let yyyy = today.getFullYear();
    this.currentDate = yyyy + "-" + mm + "-" + dd;
  }

  // Open modal function - after executing an order
  public makeOrder(): void {
    this.order.cart = this.cart;
    this.order.customer = this.customer;
    this.order.price = this.totalAmount;
    this.order.orderDate = new Date();
    this.ordersService.addOrder(this.order)
      .subscribe(addedOrder => {
        this.cart.open = false;
        this.cartsService.updateCart(this.cart);
        const modalRef = this.modalService.open(PopupOrderConfirmationComponent, this.modalOptions);
        modalRef.componentInstance.order = this.order;
        modalRef.componentInstance.customer = this.customer;
      }, err => {
        // If token expired on the serve side
        if (err.status === 401) {
          alert("Sorry! You are no longer connected. \nPlease login again.");
          this.logout();
        }
        else {
          console.log(err.message);
          const modalRef = this.modalService.open(PopupOrderConfirmationComponent, this.modalOptions);
          modalRef.componentInstance.errorMessage = false;
          modalRef.componentInstance.order = this.order;
          modalRef.componentInstance.customer = this.customer;
        }
      });
  }

  // Navigate back to shopping page:
  public goBackToShoppingPage(): void {
    this.router.navigate(["/shopping-page/" + this.customer._id]);
  }

  // Make sure no zero allowed:
  public noZero(): void {
    this.isZero = this.order.houseNumber === 0;
  }

  // Logout:
  private logout(): void {
    sessionStorage.clear();
    const action: Action = { type: ActionType.LogOut, payload: undefined };
    this.redux.dispatch(action);
    this.router.navigate(["/home"]);
  }
}