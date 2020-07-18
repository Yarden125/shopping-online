import { Component, Output, EventEmitter } from '@angular/core';
import { ProductsService } from 'src/app/services/products.service';
import { NgRedux } from 'ng2-redux';
import { AppState } from 'src/app/redux/appState';
import { Action } from 'src/app/redux/action';
import { ActionType } from 'src/app/redux/actionType';
import { Product } from 'src/app/models/product';
import { Router } from '@angular/router';

@Component({
  selector: 'app-search-products',
  templateUrl: './search-products.component.html',
  styleUrls: ['./search-products.component.css']
})
export class SearchProductsComponent {

  @Output() public noSearchResultEvent = new EventEmitter<boolean>()
  public search: string;
  public noSearchResult: boolean;
  public products: Product;
  public buttonDisabled :boolean = true;

  public constructor(
    private productsService: ProductsService,
    private redux: NgRedux<AppState>,
    private router:Router) {
    this.search = "";
    this.noSearchResult = false;
  }

  // Search product by search word:
  public searchProductsBySearchWord(): void {
    const action: Action = { type: ActionType.GetAllProducts, payload: [] };
    this.redux.dispatch(action);
    this.productsService.getAllProductsBySearchWord(this.search)
      .subscribe(products => {
        if (products.length === 0) {
          this.noSearchResult = true;
          this.buttonDisabled = true;
          this.sendNoSearchResultEvent();
        }
        else {
          const action: Action = { type: ActionType.GetAllProducts, payload: products };
          this.redux.dispatch(action);
          this.noSearchResult = false;
          this.buttonDisabled = false;
          this.sendNoSearchResultEvent();
        }
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
    this.search = "";
  }

  // Logout:
  private logout(): void {
    sessionStorage.clear();
    const action: Action = { type: ActionType.LogOut, payload: undefined };
    this.redux.dispatch(action);
    this.router.navigate(["/home"]);
  }

  // Emit an event, send data to parent component:
  public sendNoSearchResultEvent(): void {
    this.noSearchResultEvent.emit(this.noSearchResult);
  }

  // Clear search result:
  public clearSearchResult():void{
    const action: Action = { type: ActionType.GetAllProducts, payload: [] };
    this.redux.dispatch(action);
    this.buttonDisabled = true;
  }
}
