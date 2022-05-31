import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import {ReactiveFormsModule} from "@angular/forms";
import { NotfoundComponent } from './notfound/notfound.component';
import {HttpClientModule} from "@angular/common/http";
import { ComplaintDepartmentComponent } from './complaint-department/complaint-department.component';
import { ComplaintDepartmentDetailsComponent } from './complaint-department-details/complaint-department-details.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SignupComponent,
    NotfoundComponent,
    ComplaintDepartmentComponent,
    ComplaintDepartmentDetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
