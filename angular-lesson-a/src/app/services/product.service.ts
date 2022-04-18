import { Injectable } from '@angular/core';
import { ProductsData } from "./products-data";

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor() {

  }

  getProducts() {
    return ProductsData.products;
  }
}
