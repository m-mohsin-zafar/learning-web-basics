import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import { AppComponent } from './app.component';
import { ProductComponent } from './product/product.component';
import { SummaryPipe } from './pipes/summary.pipe';
import { CustomAccordianComponent } from './custom-accordian/custom-accordian.component';
import { SignupComponent } from './signup/signup.component';
import { PizzaOrderFormComponent } from './pizza-order-form/pizza-order-form.component';

@NgModule({
  declarations: [
    AppComponent,
    ProductComponent,
    SummaryPipe,
    CustomAccordianComponent,
    SignupComponent,
    PizzaOrderFormComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
