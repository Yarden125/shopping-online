import { Component, Output, EventEmitter } from '@angular/core';
import { Login } from 'src/app/models/login';
import { LoginService } from 'src/app/services/login.service';
import { Customer } from 'src/app/models/customer';
import { Router } from '@angular/router';
import { Cart } from 'src/app/models/cart';
import { Admin } from 'src/app/models/admin';
import { NgRedux } from 'ng2-redux';
import { AppState } from 'src/app/redux/appState';
import { ActionType } from 'src/app/redux/actionType';
import { Action } from 'src/app/redux/action';
import { CartsService } from 'src/app/services/carts.service';
import { OrdersService } from 'src/app/services/orders.service';
import { CartsItemsService } from 'src/app/services/carts-items.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  @Output() public loggedInEvent = new EventEmitter<boolean>();
  public loggedIn: boolean;
  public login: Login;
  public customer: Customer;
  public cart: Cart;
  public carts: Cart[];
  public admin: Admin;

  public constructor(
    private loginService: LoginService,
    private ordersService:OrdersService,
    private router: Router,
    private cartsService: CartsService,
    private cartsItemsService: CartsItemsService,
    private redux: NgRedux<AppState>) {
    this.login = new Login();
    this.customer = new Customer();
    this.admin = new Admin();
    this.cart = new Cart();
  }

  // Login function:
  public logIn(): void {
    this.login.email = this.login.email.toLowerCase();
    // if Admin check box is checked:
    if (this.login.isAdmin === true) {
      this.loginService.loginAdmin(this.login)
        .subscribe(
          response => {
            if (response === false) {
              alert("Email or password are invalid");
              this.login.email = undefined;
              this.login.password = undefined;
            }
            else {
              const action: Action = { type: ActionType.GetAdmin, payload: response.admin };
              this.redux.dispatch(action);
              this.admin = response.admin;

              // jwt- JSON Web Token:
              sessionStorage.setItem("admin", JSON.stringify(response.admin));
              sessionStorage.setItem("token", response.token);
              
              this.router.navigate(["/admin-page"]);
            }
          },
          err => alert(err.message)
        );
    }
    // if Admin checkbox is not checked - cheack customer's login details: 
    else {
      this.loginService.loginCustomer(this.login)
        .subscribe(
          response => {
            if (response === false) {
              alert("Email or password are invalid. \nAdmin must check the check box");
              this.login.email = undefined;
              this.login.password = undefined;
              this.loggedIn = false;
            }
            else {
              const action: Action = { type: ActionType.GetOneCustomer, payload: response.customer };
              this.redux.dispatch(action);
              const action2: Action = { type: ActionType.GetLatestOrder, payload: null };
              this.redux.dispatch(action2);

              // jwt- JSON Web Token:
              sessionStorage.setItem("customer", JSON.stringify(response.customer));
              sessionStorage.setItem("token", response.token);
              
              this.getCarts(response.customer);
              this.getTheLastOrder(response.customer._id);
              this.loggedIn = true;
              this.sendLoggedInEvent();
            }
          }, err => alert(err.message)
        );
    }
  }

  // Get the latest order:
  public getTheLastOrder(_id: string):void{
    this.ordersService.getLastOrder(_id);
  }

  // Navigate to register page:
  public goToRegister(): void {
    this.router.navigate(["/register"]);
  }

  // Get all customer's carts
  public getCarts(customer: Customer): void {
    this.cartsService.getAllCartsByCutomerID(customer._id)
      .subscribe(carts => {
        const action: Action = { type: ActionType.GetAllCarts, payload: carts };
        this.redux.dispatch(action);
        this.getOneCart(carts);
      },  err => {
        // If token expired on the server side:
        if (err.status === 401) {
          alert("Sorry! You are no longer connected. \nPlease login again.");
          this.logout();
        }
        else{
          alert(err.message);
        }
      });
  }

  // Logout:
  public logout(): void {
    sessionStorage.clear();
    const action: Action = { type: ActionType.LogOut, payload: undefined };
    this.redux.dispatch(action);
    this.router.navigate(["/home"]);
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
  }

  // Send data to parent component - home:
  public sendLoggedInEvent():void{
    this.loggedInEvent.emit(this.loggedIn);
  }

  // Show admin checkbox only in dev mode
  public isDevMode():boolean{
    if(environment.production){
      return false;
    }
    else{
      return true;
    }
  }
}
