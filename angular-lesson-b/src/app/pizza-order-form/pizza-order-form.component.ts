import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormControl, FormGroup} from "@angular/forms";
import {ContactDetails} from "./order-model";

@Component({
  selector: 'app-pizza-order-form',
  templateUrl: './pizza-order-form.component.html',
  styleUrls: ['./pizza-order-form.component.css']
})
export class PizzaOrderFormComponent implements OnInit {



  orderForm: FormGroup;

  constructor(formBuilder: FormBuilder) {
    // this.orderForm = new FormGroup({
    //   'contactDetails': new FormGroup({
    //     'firstName': new FormControl('John'),
    //     'lastName': new FormControl('Doe')
    //   })
    // })

    this.orderForm = formBuilder.group({
      'contactDetails': formBuilder.group(new ContactDetails())
    })
  }

  ngOnInit(): void {
  }

  placeOrder(): void {
    console.log(this.orderForm);
  }

}
