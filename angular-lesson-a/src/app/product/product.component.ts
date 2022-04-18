import { Component, OnInit } from '@angular/core';
import {ProductService} from "../services/product.service";

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  products: any[];
  bookmarked = false;

  constructor(productService: ProductService) {
    this.products = productService.getProducts();
    this.addFields();
  }

  ngOnInit(): void {
    // console.log(this.products);
    this.products.forEach((row) => {
      console.log(row);
    })
  }

  addFields(): void {
    this.products.forEach((row) => {
      row['bookmarked'] = false;
      row['bid'] = 0.00;
    })
  }

  onBookmark(p: any){
    let index = this.products.indexOf(p);
    let product = this.products[index];
    if (product.bookmarked){
      product.bookmarked = false;
    } else {
      product.bookmarked = true;
    }
  }

  onBid(p: any){
    p.bid = parseFloat(p.bid);
    console.log(this.products);
  }
}
