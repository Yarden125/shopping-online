import { Injectable } from '@angular/core';
import { Category } from '../models/category';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { ActionType } from '../redux/actionType';
import { Action } from '../redux/action';
import { NgRedux } from 'ng2-redux';
import { AppState } from '../redux/appState';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class CategoriesService {

  public constructor(
    private httpClient: HttpClient,
    private redux: NgRedux<AppState>,
    private router: Router) { }

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

  // Get all categories:
  public getAllCategories(): void {
    this.httpClient.get<Category[]>("/api/categories", this.getHeaders())
      .subscribe(categories => {
        const action: Action = { type: ActionType.GetCategories, payload: categories };
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
