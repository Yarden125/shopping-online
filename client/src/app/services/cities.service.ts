import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { City } from '../models/city';
import { Action } from '../redux/action';
import { ActionType } from '../redux/actionType';
import { NgRedux } from 'ng2-redux';
import { AppState } from '../redux/appState';

@Injectable({
  providedIn: 'root'
})
export class CitiesService {

  public constructor(
    private httpClient: HttpClient,
    private redux: NgRedux<AppState>) { }

  // Get all cities:
  public getAllCities(): void {
    this.httpClient.get<City[]>("http://localhost:3001/api/cities")
      .subscribe(
        cities => {
          const action: Action = { type: ActionType.GetCities, payload: cities };
          this.redux.dispatch(action);
        }, err => {
          alert(err.message);
        }
      );
  }
}
