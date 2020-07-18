import { Component, OnInit, Input, OnDestroy, Output, EventEmitter } from '@angular/core';
import { Product } from 'src/app/models/product';
import { ProductsService } from 'src/app/services/products.service';
import { CategoriesService } from 'src/app/services/categories.service';
import { Category } from 'src/app/models/category';
import { NgRedux } from 'ng2-redux';
import { AppState } from 'src/app/redux/appState';
import { Unsubscribe } from 'redux';

@Component({
  selector: 'app-update-product',
  templateUrl: './update-product.component.html',
  styleUrls: ['./update-product.component.css']
})
export class UpdateProductComponent implements OnInit, OnDestroy {

  @Output() public closeUpdateEvent = new EventEmitter<boolean>();
  @Input() public productToUpdate: Product;
  public showUpdate:boolean = false;
  public newProduct: Product;
  public categories: Category[];
  public selectedImage: File;
  public prevImage: string;
  public unsubscribe: Unsubscribe;
  public zero: boolean= false;

  public constructor(
    private productsService: ProductsService,
    private categoriesService: CategoriesService,
    private redux: NgRedux<AppState>) { }

// Invoked at the beginning of the component's lifecycle:
  public ngOnInit(): void {
    this.prevImage = this.productToUpdate.image;
    this.subscribeToStore();
    
    // get all categories:
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
  
  // On image selected:
  public onImageSelected(event:any): void {
    this.selectedImage = event.target.files[0];  
  }

  // Update product
  public updateProduct(): void {
    const fd = new FormData();

    // if a new image was selected:
    if(this.selectedImage !== undefined){
      fd.append('product', JSON.stringify(this.productToUpdate));
      fd.append('prevImage', this.prevImage);
      fd.append('productImage', this.selectedImage, this.selectedImage.name);
      this.productsService.updateProduct(fd);
      this.closeUpdateEvent.emit(this.showUpdate);
    }

    // if changes were made but a new image was not selected:
    else{
      fd.append('product', JSON.stringify(this.productToUpdate));
      fd.append('prevImage', this.prevImage);
      this.productsService.updateProduct(fd);
      this.closeUpdateEvent.emit(this.showUpdate);
    }
  }

  // Emit an event- sends data to parent component:
  public sendCancelUpdate(): void {
    this.closeUpdateEvent.emit(this.showUpdate);
  }

  // is Larger than zero:
  public noZero():void{
    if(this.productToUpdate.price > 0 || this.productToUpdate.price === null ){
      this.zero = false;
    }
    else if (this.productToUpdate.price === 0) {
      this.zero = true;
    }
  }
}
