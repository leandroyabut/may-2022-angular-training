import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {SignUpRequest} from '../interfaces/sign-up-request.interface';

@Component({
  selector: 'app-sign-up-page2',
  templateUrl: './sign-up-page2.component.html',
  styleUrls: ['./sign-up-page2.component.sass']
})
export class SignUpPage2Component implements OnInit {

  signUpForm!: FormGroup;

  constructor() { }

  ngOnInit(): void {
    this.signUpForm = new FormGroup<any>({
      username: new FormControl('', [
        Validators.required,
        Validators.minLength(6),
        Validators.pattern(/^\w+$/g)
      ]),
      email: new FormControl('', [
          Validators.email,
          Validators.required
      ]),
      password: new FormControl(),
      confirmPassword: new FormControl()
    });
  }

}
