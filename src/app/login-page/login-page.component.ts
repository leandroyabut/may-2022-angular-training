import { Component, OnInit } from '@angular/core';
import {AuthRequest} from '../interfaces/auth-request.interface';
import {AuthService} from '../services/auth.service';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.sass']
})
export class LoginPageComponent implements OnInit {

  authRequest: AuthRequest = {
    username: '',
    password: ''
  };

  constructor(private authService: AuthService) { }

  ngOnInit(): void {
  }

  login() {
    this.authService.login(this.authRequest);
  }

}
