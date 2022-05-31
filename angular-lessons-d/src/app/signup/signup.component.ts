import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {UserService} from "../services/user.service";
import {ActivatedRoute, Router, RouterOutlet} from "@angular/router";
import {User} from "../user";

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  signupForm: FormGroup;

  constructor(private _userService: UserService,
              private _router: Router) {

    this.signupForm = this.prepareForm();
  }

  ngOnInit(): void {
  }

  prepareForm(){
    return new FormGroup({
      'name': new FormControl('', Validators.required),
      'email': new FormControl('', Validators.email),
      'password': new FormControl('', Validators.required),
      'confirmPassword': new FormControl('', Validators.required)
    })
  }

  signup(): void {
    let user = this.signupForm.value;
    // Perform some validations maybe
    delete user['confirmPassword'];

    this._userService.registerUser(user).subscribe((response) => {
      if(response?.id){
        this._router.navigate(['/']);
      }

    });
  }

}
