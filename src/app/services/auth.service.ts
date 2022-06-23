import { Injectable } from '@angular/core';
import {AuthRequest} from '../interfaces/auth-request.interface';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() { }

  login(request: AuthRequest) {
    console.log('Attempted to log in...');
    console.log(request);
  }
}
