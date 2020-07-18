import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { LayoutComponent } from './components/layout/layout.component';
import { HttpClientModule } from "@angular/common/http";
import { FormsModule } from "@angular/forms";
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { Page404Component } from './components/page404/page404.component';
import { HomeComponent } from './components/home/home.component';
import { AddProductComponent } from './components/add-product/add-product.component';
import { UpdateProductComponent } from './components/update-product/update-product.component';
import { AdminPageComponent } from './components/admin-page/admin-page.component';
import { ShoppingPageComponent } from './components/shopping-page/shopping-page.component';
import { SiteMenuComponent } from './components/site-menu/site-menu.component';
import { NgRedux , NgReduxModule } from "ng2-redux";
import { AppState } from './redux/appState';
import { Reducer } from './redux/reducer';
import { CartComponent } from './components/cart/cart.component';
import { PopupsProductsComponent } from './components/popups-products/popups-products.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { OrderPageComponent } from './components/order-page/order-page.component';
import { SearchProductsComponent } from './components/search-products/search-products.component';
import { PopupOrderConfirmationComponent } from './components/popup-order-confirmation/popup-order-confirmation.component';

@NgModule({
  declarations: [LayoutComponent, LoginComponent, RegisterComponent, Page404Component, HomeComponent, AddProductComponent, UpdateProductComponent, AdminPageComponent, ShoppingPageComponent, SiteMenuComponent, CartComponent, PopupsProductsComponent, OrderPageComponent, SearchProductsComponent, PopupOrderConfirmationComponent],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule, FormsModule, NgReduxModule, NgbModule],
  entryComponents:[PopupsProductsComponent, PopupOrderConfirmationComponent],
  providers: [],
  bootstrap: [LayoutComponent]
})
export class AppModule {
  public constructor(ngRedux: NgRedux<AppState>){
    ngRedux.configureStore(Reducer.reduce, new AppState());
  }
 }
