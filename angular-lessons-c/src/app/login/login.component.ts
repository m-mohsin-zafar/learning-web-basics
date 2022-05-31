import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {UserService} from "../services/user.service";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;

  constructor(private fb: FormBuilder,
              private _userService: UserService) {
    this.loginForm = this.prepareForm();
  }

  prepareForm(){
    return this.loginForm = this.fb.group(
      {
        'email': ['', Validators.required],
        'password': ['', Validators.required]
      }
    );
  }

  ngOnInit(): void {
  }

  login(){
    console.log(this.loginForm.value);
    let user = this.loginForm.value;
    this._userService.authenticateUser(user).subscribe((response) => {
      console.log(response);
      localStorage.setItem('token', (response as any).token)
    });
  }

}
