import { Component, OnInit, OnDestroy } from '@angular/core';
import { CategoriesService } from 'src/app/services/categories.service';
import { Category } from 'src/app/models/category';
import { Product } from 'src/app/models/product';
import { ProductsService } from 'src/app/services/products.service';
import { NgRedux } from 'ng2-redux';
import { AppState } from 'src/app/redux/appState';
import { CartItem } from 'src/app/models/cartItem';
import { ActivatedRoute, Router } from '@angular/router';
import { Cart } from 'src/app/models/cart';
import { Customer } from 'src/app/models/customer';
import { CustomersService } from 'src/app/services/customers.service';
import { ActionType } from 'src/app/redux/actionType';
import { Action } from 'src/app/redux/action';
import { CartsService } from 'src/app/services/carts.service';
import { Unsubscribe } from 'redux';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { PopupsProductsComponent } from '../popups-products/popups-products.component';
import { CartsItemsService } from 'src/app/services/carts-items.service';

@Component({
  selector: 'app-shopping-page',
  templateUrl: './shopping-page.component.html',
  styleUrls: ['./shopping-page.component.css']
})
export class ShoppingPageComponent implements OnInit, OnDestroy {

  public categories: Category[];
  public products: Product[];
  public cartsItems: CartItem[];
  public customer: Customer;
  public cart: Cart;
  public carts: Cart[];
  public unsubscribe: Unsubscribe;
  public closeResult: string;
  public totalAmount: number;
  public noSearchResult: boolean;

  public constructor(
    private modalService: NgbModal,
    private categoriesService: CategoriesService,
    private productsService: ProductsService,
    private customersService: CustomersService,
    private cartsItemsService: CartsItemsService,
    private cartsService: CartsService,
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private redux: NgRedux<AppState>) {
    this.noSearchResult = false;
  }

  // Invoked at the beginning of the component's lifecycle:
  public ngOnInit(): void {

    // if customer is logged in:
    if (this.isCustomerLoggedIn()) {
      this.subscribeToStore();

      // get all categories:
      if (this.redux.getState().categories.length === 0) {
        this.categoriesService.getAllCategories();
      }
      const userID = this.activatedRoute.snapshot.params.userID;

      // get customer by Id:
      if (this.customer === null || this.customer === undefined) {
        this.customersService.getOneCustomer(userID);
      }

      //get all users carts: 
      if (this.carts === null || this.carts === undefined || this.cartsItems.length === 0) {
        this.cartsService.getAllCartsByCutomerID(userID)
          .subscribe(carts => {
            const action: Action = { type: ActionType.GetAllCarts, payload: carts };
            this.redux.dispatch(action);
            this.getOneCart(carts);
          }, err => {
            // if token expired on the server side
            if (err.status === 401) {
              alert("Sorry! You are no longer connected. \nPlease login again.");
              this.logout();
            }
            else{
              alert(err.message);
            }
          });
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
      this.products = this.redux.getState().products;
      this.customer = this.redux.getState().customer;
      this.carts = this.redux.getState().carts;
      this.cart = this.redux.getState().cart;
      this.cartsItems = this.redux.getState().cartsItems;
      this.categories = this.redux.getState().categories;
    });
  }

  // Logout:
  public logout(): void {
    sessionStorage.clear();
    const action: Action = { type: ActionType.LogOut, payload: undefined };
    this.redux.dispatch(action);
    this.router.navigate(["/home"]);
  }

  // Check if customer is logged in:
  public isCustomerLoggedIn(): boolean {
    return sessionStorage.getItem("customer") !== null;
  }

  // Unsubscribe to store - Invoked a moment before the component's life cycle ends:
  public ngOnDestroy(): void {
    if (this.unsubscribe) {
      this.unsubscribe();
    }
  }

  // Get all products by category:
  public getAllProductsByCategory(_id: string): void {
    this.noSearchResult = false;
    this.productsService.getAllProductsByCategory(_id);
  }

  // Get one cart by status "open:true" :
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
  }

  // Open modal function - for selecting a product to add to cart
  public selectProduct(prod: Product): void {
    const modalRef = this.modalService.open(PopupsProductsComponent);
    modalRef.componentInstance.product = prod;
    modalRef.componentInstance.currentCart = this.cart;
    this.totalAmount = this.calculateTotalCartAmount();
    modalRef.componentInstance.totalAmount = this.totalAmount;
  }

  // Calculate total amount to pay:
  public calculateTotalCartAmount(): number {
    let sum = 0;
    for (let i = 0; i < this.cartsItems.length; i++) {
      sum += this.cartsItems[i].price;
    }
    return sum;
  }

  // Receive true or false from search result
  public receiveNoSearchResult($event: any): void {
    this.noSearchResult = $event;
  }
}

