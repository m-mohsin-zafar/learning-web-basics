import { Component } from '@angular/core';
import {ProductService} from "./services/product.service";
import {Product} from "./interfaces/product";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  private productService: ProductService;
  products: any[] = [];

  constructor(productService: ProductService) {
    this.productService = productService;
    // Change b/w the two choices and observe the behavior of *ngIf
    this.products = this.productService.getProducts();
    // this.products = [];
  }

  wishedFor(value:any){
    console.log(value);
  }

  reloadProducts(){
    this.products = this.productService.getProducts();
    console.log('reloaded.');
  }

  trackProduct(index: number, product: Product){
    // The idea of this method is to return the id of the product to be able for angular to compare it with existing ids
    // such that re-rendering is done only if the id is not already available.
    return product ? product.id : undefined;
  }
}
