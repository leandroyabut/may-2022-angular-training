import { Component, OnInit } from '@angular/core';
import {SignUpRequest} from '../interfaces/sign-up-request.interface';

@Component({
  selector: 'app-sign-up-page',
  templateUrl: './sign-up-page.component.html',
  styleUrls: ['./sign-up-page.component.sass']
})
export class SignUpPageComponent implements OnInit {

  request: SignUpRequest = {
    email: '',
    password: '',
    username: '',
    confirmPassword: ''
  };

  constructor() { }

  ngOnInit(): void {
  }

}
