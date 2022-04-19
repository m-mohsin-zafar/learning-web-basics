import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import {ProductService} from "../services/product.service";

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  @Input() pID: string = '';
  @Input() titleText: string = '';
  @Input() imgSrc: string = '';
  @Input() price: number = 0;
  @Input() isFavorite: boolean = false;
  @Input() rate: number = 0;
  @Input() vCount: number = 0;
  @Input() bidValue: any = 0;

  @Output() isWished = new EventEmitter();


  constructor() {

  }

  ngOnInit(): void {

  }

  onBookmark(){
    this.isFavorite = !this.isFavorite;
    this.isWished.emit({'id': this.pID});
  }

  onBid(){
    this.bidValue = parseFloat(this.bidValue);
    console.log(this.bidValue);
  }
}
