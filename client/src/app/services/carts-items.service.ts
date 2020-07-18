import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { NgRedux } from 'ng2-redux';
import { AppState } from '../redux/appState';
import { CartItem } from '../models/cartItem';
import { Action } from '../redux/action';
import { ActionType } from '../redux/actionType';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class CartsItemsService {

  public constructor(
    private httpClient: HttpClient,
    private redux: NgRedux<AppState>,
    private router: Router) { }

  //  Get header with the current token:
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

  // Add product to cart. result: product would become cartItem:
  public addProductToCart(cartItem: CartItem): void {
    this.httpClient.post<CartItem>("http://localhost:3001/api/carts-items", cartItem, this.getHeaders())
      .subscribe(addedCartItem => {
        cartItem._id = addedCartItem._id;
        const action: Action = { type: ActionType.AddCartItem, payload: cartItem };
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

  // Get all cartsItems by cartID:
  public getAllCartsItemsByCartID(cartID: string): void {
    this.httpClient.get<CartItem[]>("http://localhost:3001/api/carts-items/cartID/" + cartID, this.getHeaders())
      .subscribe(cartsItems => {
        const action: Action = { type: ActionType.GetAllCartsItems, payload: cartsItems };
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

  // Delete one cartItem:
  public deleteOneCartItem(cartItemID: string): void {
    this.httpClient.delete<CartItem>("http://localhost:3001/api/carts-items/" + cartItemID, this.getHeaders())
      .subscribe(() => {
        const action: Action = { type: ActionType.DeleteOneCartItem, payload: cartItemID };
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

  // Delete all cartsItems from cart:
  public deleteAllCartsItems(cartID: string): void {
    this.httpClient.delete<CartItem[]>("http://localhost:3001/api/carts-items/delete-by-cartID/" + cartID, this.getHeaders())
      .subscribe(() => {
        const action: Action = { type: ActionType.DeleteCartsItems, payload: cartID };
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
