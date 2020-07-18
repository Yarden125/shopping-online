import { Component, OnInit, OnDestroy } from '@angular/core';
import { Customer } from 'src/app/models/customer';
import { NgRedux } from 'ng2-redux';
import { AppState } from 'src/app/redux/appState';
import { Cart } from 'src/app/models/cart';
import { Router } from '@angular/router';
import { CartsService } from 'src/app/services/carts.service';
import { CustomersService } from 'src/app/services/customers.service';
import { Unsubscribe } from 'redux';
import { ProductsService } from 'src/app/services/products.service';
import { OrdersService } from 'src/app/services/orders.service';
import { Action } from 'src/app/redux/action';
import { ActionType } from 'src/app/redux/actionType';
import { Order } from 'src/app/models/order';
import { CartsItemsService } from 'src/app/services/carts-items.service';
import { CartItem } from 'src/app/models/cartItem';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit, OnDestroy {

  public customer: Customer;
  public newCart: Cart;
  public cart: Cart;
  public carts: Cart[];
  public cartsItems: CartItem[];
  public totalAmount: number;
  public unsubscribe: Unsubscribe;
  public unsubscribe2: Unsubscribe;
  public countOrders: number;
  public countProducts: number;
  public loggedIn: boolean;
  public latestOrder: Order;

  public constructor(
    private redux: NgRedux<AppState>,
    private cartsService: CartsService,
    private productsService: ProductsService,
    private ordersService: OrdersService,
    private customersService: CustomersService,
    private cartsItemsService: CartsItemsService,
    private router: Router) {
    this.newCart = new Cart();
    this.loggedIn = false;
  }

  // Check if customer is logged in:
  public isCustomerLoggedIn(): boolean {
    return sessionStorage.getItem("customer") !== null;
  }

  // Invoked at the beginning of the component's lifecycle:
  public ngOnInit(): void {
    // Get count- products and orders:
    this.getOrdersNumber();
    this.getProductsNumber();

    this.unsubscribe2 = this.redux.subscribe(() => {
      this.countOrders = this.redux.getState().countOrders;
      this.countProducts = this.redux.getState().countProducts;
    });

    if (this.isCustomerLoggedIn()) {
      this.loggedIn = true;
      this.subscribeToStore();
    } else {
      this.loggedIn = false;
    }
  }

  // Subscribe to store:
  public subscribeToStore(): void {
    this.unsubscribe = this.redux.subscribe(() => {
      this.customer = this.redux.getState().customer;
      this.carts = this.redux.getState().carts;
      this.cart = this.redux.getState().cart;
      this.cartsItems = this.redux.getState().cartsItems;
      this.totalAmount = this.redux.getState().totalAmount;

      // get latest order:
      if (this.latestOrder !== null || this.latestOrder !== undefined) {
        this.latestOrder = this.redux.getState().latestOrder;
      }
      if (!this.isCustomerLoggedIn()) {
        this.loggedIn = false;
      }

      // calculate total amount:
      if (this.cartsItems) {
        this.totalAmount = this.calculateTotalCartAmount();
      }

      // get customer:
      if (this.customer === null || this.customer === undefined) {
        const customer = JSON.parse(sessionStorage.getItem("customer"));
        if (customer) {
          this.customersService.getOneCustomer(customer._id);
        }

        // get carts:
      } else {
        if ((this.carts === null || this.carts === undefined || this.carts.length === 0) && !this.customer.newCustomer) {
          this.getCarts(this.customer);
        }
      }
    });
  }

  // Get all customer's carts
  public getCarts(customer: Customer): void {
    this.cartsService.getAllCartsByCutomerID(customer._id)
      .subscribe(carts => {
        const action: Action = { type: ActionType.GetAllCarts, payload: carts };
        this.redux.dispatch(action);
        this.getOneCart(carts);
        this.getTheLatestOrder(customer._id);
      }, err => {
        // If token expired on the server side:
        if (err.status === 401) {
          alert("Sorry! You are no longer connected. \nPlease login again.");
          this.logout();
        }
        else {
          alert(err.message);
        }
      });
  }

  // Get total amount to pay:
  public getTotalAmount(): void {
    const total = this.calculateTotalCartAmount();
    const action: Action = { type: ActionType.SaveTotalAmount, payload: total };
    this.redux.dispatch(action);
  }

  // Logout:
  public logout(): void {
    sessionStorage.clear();
    const action: Action = { type: ActionType.LogOut, payload: undefined };
    this.redux.dispatch(action);
    this.loggedIn = false;
    this.router.navigate(["/home"]);
  }

  // Only if customer is not new get latest order:
  public getTheLatestOrder(_id: string): void {
    if (!this.customer.newCustomer) {
      if (this.latestOrder === null || this.latestOrder === undefined) {
        this.getTheLastOrder(_id);
      }
      else {
        this.latestOrder = this.redux.getState().latestOrder;
      }
    }
  }

  // Get the latst order:
  public getTheLastOrder(_id: string): void {
    this.ordersService.getLastOrder(_id);
  }

  // Get one cart where "open:true":
  public getOneCart(carts: Cart[]): void {
    for (let cart of carts) {
      if (cart.open === true) {
        const action: Action = { type: ActionType.GetOneCart, payload: cart };
        this.redux.dispatch(action);
        this.getAllCartsItemsByCartId(cart._id);
      }
    }
  }

  // Get all carts-items by cart Id:
  public getAllCartsItemsByCartId(_id: string): void {
    this.cartsItemsService.getAllCartsItemsByCartID(_id);
    if (this.cartsItems) {
      this.getTotalAmount();
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

  // Get total number of Orders in the site:
  public getOrdersNumber(): void {
    this.ordersService.getCountOrders();
  }

  // Get total number of Products in the site:
  public getProductsNumber(): void {
    this.productsService.getCountProducts();
  }

  // Unsubscribe to store - invoked a moment before the component's lifecycle ends:
  public ngOnDestroy(): void {
    if (this.unsubscribe) {
      this.unsubscribe();
    }
    if (this.unsubscribe2) {
      this.unsubscribe2();
    }
  }

  // Go to shopping page:
  public goToShoppingPage(): void {
    this.router.navigate(["/shopping-page/" + this.customer._id]);
  }

  // Create new cart:
  public createNewCart(): void {
    this.customer.newCustomer = false;
    this.customersService.updateOneCustomer(this.customer);
    this.newCart.customer = this.customer;
    this.newCart.date = new Date();
    this.newCart.open = true;
    this.cartsService.addNewCart(this.newCart)
      .subscribe(
        newCart => {
          this.cart = newCart;
          this.router.navigate(["/shopping-page/" + this.customer._id]);
        }, err => {
          // If token expired on the server side:
          if (err.status === 401) {
            alert("Sorry! You are no longer connected. \nPlease login again.");
            this.logout();
          }
          else {
            alert(err.message);
          }
        });
  }

  // Receive data from child component: login
  public receiveLoggedIn($event: any): void {
    this.loggedIn = $event;
    this.subscribeToStore();
  }
}
