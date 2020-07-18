import { Component, OnInit, OnDestroy } from '@angular/core';
import { Customer } from 'src/app/models/customer';
import { City } from 'src/app/models/city';
import { CitiesService } from 'src/app/services/cities.service';
import { Router } from '@angular/router';
import { RegisterService } from 'src/app/services/register.service';
import { Cart } from 'src/app/models/cart';
import { NgRedux } from 'ng2-redux';
import { AppState } from 'src/app/redux/appState';
import { Action } from 'src/app/redux/action';
import { ActionType } from 'src/app/redux/actionType';
import { Unsubscribe } from 'redux';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit, OnDestroy {

  public customer: Customer;
  public cities: City[];
  public cart: Cart;
  public unsubscribe: Unsubscribe;
  public isZero: boolean = false;
  public isAgularBrackets: boolean = false;

  constructor(
    private citiesService: CitiesService,
    private registerService: RegisterService,
    private router: Router,
    private redux: NgRedux<AppState>) {
    this.customer = new Customer();
    this.customer.city = new City();
    this.customer.city._id = "city";
    this.cities = [];
    this.cart = new Cart();
  }

  // Invoked at the beginning of the component's lifecycle:
  public ngOnInit(): void {
    this.subscribeToStore();

    // get all cities:
    if (this.redux.getState().cities.length === 0) {
      this.citiesService.getAllCities();
    }
  }
  
  // Subscribe to store:
  public subscribeToStore():void{
    this.unsubscribe = this.redux.subscribe(() => {
      this.cart = this.redux.getState().cart;
      this.cities = this.redux.getState().cities;
    });
  }

  // Unsubscribe to store - Invoked a moment before the component's lifecycle ends:
  public ngOnDestroy(): void {
    this.unsubscribe();
  }

  // Add new customer:
  public addCustomer() {
    this.customer.newCustomer = true;
    this.registerService.registerCustomer(this.customer)
      .subscribe(
        response => {
          if (response !== false) {
            this.customer = response.addedCustomer;
            const action: Action = { type: ActionType.GetOneCustomer, payload: this.customer };
            this.redux.dispatch(action);
            const action2: Action = { type: ActionType.GetLatestOrder, payload: null };
            this.redux.dispatch(action2);

            // jwt - JSON Web Token:
            sessionStorage.setItem("customer", JSON.stringify(this.customer));
            sessionStorage.setItem("token", response.token);

            this.router.navigate(["/home"]);
          }
          else {
            alert("Email already exists");
            this.customer.email = "";
          }
        },
        err => alert(err.message)
      );
  }

  // Cancel registration and go back to home page:
  public cancelRegistration() {
    this.router.navigate(["/home"]);
  }

  // Check - is zero:
  public noZero(): void {
    this.isZero = this.customer.houseNumber === 0;
  }

  // Make sure that customer can't use the angular brackets "<" in his password:
  public noAngularbrackets($event): void {
    const password = $event.target.value;
    if (password.includes("<")) {
      this.isAgularBrackets = true;
    } else {
      this.isAgularBrackets = false;
    }
  }
}
