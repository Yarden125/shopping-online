import { Injectable } from '@angular/core';
import { Product } from '../models/product';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { NgRedux } from 'ng2-redux';
import { AppState } from '../redux/appState';
import { Action } from '../redux/action';
import { ActionType } from '../redux/actionType';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

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

  // Get all products by category:
  public getAllProductsByCategory(_id: string): void {
    this.httpClient.get<Product[]>("http://localhost:3001/api/products/products-by-category/" + _id, this.getHeaders())
      .subscribe(products => {
        const action: Action = { type: ActionType.GetAllProducts, payload: products };
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

  // Add product:
  public addProduct(fd: any): void {
    this.httpClient.post<any>("http://localhost:3001/api/images/upload-image", fd, this.getHeaders())
      .subscribe(product => {
        this.getAllProductsByCategory(product.category._id);
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

  // Update product:
  public updateProduct(fd: any): void {
    this.httpClient.put<any>("http://localhost:3001/api/images/update-image", fd, this.getHeaders())
      .subscribe(product => {
        this.getAllProductsByCategory(product.category._id);
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

  // Get all products by search word:
  public getAllProductsBySearchWord(search: string): Observable<Product[]> {
    return this.httpClient.get<Product[]>("http://localhost:3001/api/products/products-by-search/" + search, this.getHeaders());
  }

  // Get count- number of products on the site:
  public getCountProducts(): void {
    this.httpClient.get<number>("http://localhost:3001/api/count/count-products")
      .subscribe(count => {
        const action: Action = { type: ActionType.CountAllProducts, payload: count };
        this.redux.dispatch(action);
      }, err => alert(err.message));
  }
}
