import { Component, OnInit, OnDestroy } from '@angular/core';
import { Category } from 'src/app/models/category';
import { Product } from 'src/app/models/product';
import { Admin } from 'src/app/models/admin';
import { Unsubscribe } from 'redux';
import { CategoriesService } from 'src/app/services/categories.service';
import { ProductsService } from 'src/app/services/products.service';
import { AdminService } from 'src/app/services/admin.service';
import { Router } from '@angular/router';
import { NgRedux } from 'ng2-redux';
import { AppState } from 'src/app/redux/appState';
import { ActionType } from 'src/app/redux/actionType';
import { Action } from 'src/app/redux/action';

@Component({
  selector: 'app-admin-page',
  templateUrl: './admin-page.component.html',
  styleUrls: ['./admin-page.component.css']
})
export class AdminPageComponent implements OnInit, OnDestroy {

  public categories: Category[];
  public products: Product[];
  public product: Product;
  public productToUpdate: Product;
  public admin: Admin;
  public unsubscribe: Unsubscribe;
  public showAdd: boolean;
  public showUpdate: boolean;
  public noSearchResult: boolean;

  public constructor(
    private categoriesService: CategoriesService,
    private productsService: ProductsService,
    private adminService: AdminService,
    private router: Router,
    private redux: NgRedux<AppState>) {
    this.product = new Product();
    this.productToUpdate = new Product();
    this.showAdd = false;
    this.showUpdate = false;
    this.noSearchResult = false;
  }

   // Invoked at the beginning of the component's lifecycle:
  public ngOnInit(): void {
    // if admin logged in:
    if (this.isAdminLoggedIn()) {
      this.subscribeToStore();
      this.getCategories();
      this.getAdmin();
    }
    // if not:
    else{
      this.logout();
    }
  }

  // Get admin:
  public getAdmin():void{
    this.adminService.getAdmin()
    .subscribe(
      admin => {
        const action: Action = { type: ActionType.GetAdmin, payload: admin };
        this.redux.dispatch(action);
      },err => alert(err.message)
    );
  }

  // Subscribe to store:
  public subscribeToStore():void{
    this.unsubscribe = this.redux.subscribe(() => {
      this.products = this.redux.getState().products;
      this.admin = this.redux.getState().admin;
      this.categories = this.redux.getState().categories;
    });
  }

  // Get all categories
  public getCategories():void{
    if (this.redux.getState().categories.length === 0) {
      this.categoriesService.getAllCategories();
    }
    else {
      this.categories = this.redux.getState().categories;
    }
  }

  // Check if admin is logged in:
  public isAdminLoggedIn(): boolean {
    return sessionStorage.getItem("admin") !== null;
  }

  // Logout admin:
  public logout(): void {
    sessionStorage.clear();
    const action: Action = { type: ActionType.LogOut, payload: undefined };
    this.redux.dispatch(action);
    this.router.navigate(["/home"]);
  }

  // Unsubscribe to store - Invoked a moment before the component's lifecycle ends:
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

  // Replace displays - hides "update" and reveals "add":
  public addProduct(): void {
    this.showUpdate = false;
    this.showAdd = true;
  }

  // Replace displays - hides "add" and reveals "update":
   public updateProduct(prod: Product): void {
    this.showAdd = false;
    this.productToUpdate = { ...prod };
    this.showUpdate = true;
  }

  // Receive data from child component: add
  public receiveCancelAdding($event: any): void {
    this.showAdd = $event;
  }

  // Receive data from child component: update
  public receiveCancelUpdate($event: any): void {
    this.showUpdate = $event;
  }

  // Receive data from child component: search-product
  public receiveNoSearchResult($event: any): void {
    this.noSearchResult = $event;
  }
}


