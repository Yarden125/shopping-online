import { Component, OnInit, OnDestroy, Output, EventEmitter } from '@angular/core';
import { Product } from 'src/app/models/product';
import { ProductsService } from 'src/app/services/products.service';
import { Category } from 'src/app/models/category';
import { CategoriesService } from 'src/app/services/categories.service';
import { NgRedux } from 'ng2-redux';
import { AppState } from 'src/app/redux/appState';
import { Unsubscribe } from 'redux';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent implements OnInit, OnDestroy {

  @Output() public closeAddEvent = new EventEmitter<boolean>();
  public showAdd: boolean = false;
  public product: Product;
  public categories: Category[];
  public image: any;
  public selectedImage: File;
  public unsubscribe: Unsubscribe;
  public zero:boolean = false;

  public constructor(
    private productsService: ProductsService,
    private categoriesService: CategoriesService,
    private redux: NgRedux<AppState>) {
    this.product = new Product();
    this.product.category = new Category();
    this.product.category._id = "category";
    this.selectedImage = null;
  }

   // Inviked at the beginning of the component's lifecycle:
  public ngOnInit(): void {
    this.subscribeToStore();

    // Get all categories:
    if (this.redux.getState().categories.length === 0) {
      this.categoriesService.getAllCategories();
    }
    else {
      this.categories = this.redux.getState().categories;
    }
  }

  // Subscribe to store:
  public subscribeToStore():void{
    this.unsubscribe = this.redux.subscribe(() => {
      this.categories = this.redux.getState().categories;
    });
  }

  // Unsubscribe to store - Invoked a moment before the component's lifecycle ends:
  public ngOnDestroy(): void {
    this.unsubscribe();
  }

  // Saving the image uploaded from admin in a variable 
  public onImageSelected(event:any): void {
    this.selectedImage = event.target.files[0];
  }

  // Add product:
  public addProduct(): void {
    const fd = new FormData();
    fd.append('productImage', this.selectedImage, this.selectedImage.name);
    fd.append('product', JSON.stringify(this.product));
    this.productsService.addProduct(fd);
    this.closeAddEvent.emit(this.showAdd);
  }

  // Cancel adding a new product:
  public sendCancelAdding(): void {
    this.closeAddEvent.emit(this.showAdd);
  }

  // Is Larger than zero:
  public noZero():void{
    if(this.product.price > 0 || this.product.price === null ){
      this.zero = false;
    }
    else if (this.product.price === 0) {
      this.zero = true;
    }
  }
}
