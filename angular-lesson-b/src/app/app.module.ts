import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from "@angular/forms";
import { AppComponent } from './app.component';
import { ProductComponent } from './product/product.component';
import { SummaryPipe } from './pipes/summary.pipe';
import { CustomAccordianComponent } from './custom-accordian/custom-accordian.component';

@NgModule({
  declarations: [
    AppComponent,
    ProductComponent,
    SummaryPipe,
    CustomAccordianComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
