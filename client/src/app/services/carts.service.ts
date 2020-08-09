import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Cart } from '../models/cart';
import { Action } from '../redux/action';
import { ActionType } from '../redux/actionType';
import { NgRedux } from 'ng2-redux';
import { AppState } from '../redux/appState';
import { CustomersService } from './customers.service';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class CartsService {

  public constructor(
    private httpClient: HttpClient,
    private redux: NgRedux<AppState>,
    private router: Router,
    public customersService: CustomersService) {
  }

  // Get header with the current token:
  public getHeaders() {
    return {
      headers: new HttpHeaders({ 'Authorization': `${sessionStorage.getItem("token")}` })
    };
  }

  // Logout:
  public logout(): void {
    sessionStorage.clear();
    const action: Action = { type: ActionType.LogOut, payload: undefined };
    this.redux.dispatch(action);
    this.router.navigate(["/home"]);
  }

  // Add new cart:
  public addNewCart(cart: Cart): Observable<Cart> {
    return this.httpClient.post<Cart>("/api/carts", cart, this.getHeaders());
  }

  // Get all carts by customer id:
  public getAllCartsByCutomerID(_id: string): Observable<Cart[]> {
    return this.httpClient.get<Cart[]>("/api/carts/" + _id, this.getHeaders());
  }

  // Get one cart by cart ID:
  public getOneCartByCartID(_id: string): void {
    this.httpClient.get<Cart>("/api/carts/cart-by-cartID/" + _id, this.getHeaders())
      .subscribe(cart => {
        const action: Action = { type: ActionType.GetOneCart, payload: cart };
        this.redux.dispatch(action);
        if (cart !== undefined) {
          this.customersService.getOneCustomer(cart.customer._id);
        }
      }, err => {
        // if token expired on the server side:
        if (err.status === 401) {
          alert("Sorry! You are no longer connected. \nPlease login again.");
          this.logout();
        }
        else{
          alert(err.message);
        }
      });
  }

  // Update cart status to be "open: false":
  public updateCart(cart: Cart): void {
    this.httpClient.patch<Cart>("/api/carts/" + cart._id, cart, this.getHeaders())
      .subscribe(updatedCart => {
        const action: Action = { type: ActionType.UpdateOneCart, payload: updatedCart };
        this.redux.dispatch(action);
      }, err => {
        // if token expired on the server side:
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
