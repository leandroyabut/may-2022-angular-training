import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomePageComponent} from './home-page/home-page.component';
import {UselessFactsComponent} from './useless-facts/useless-facts.component';
import {LoginPageComponent} from './login-page/login-page.component';
import {SignUpPageComponent} from './sign-up-page/sign-up-page.component';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    component: HomePageComponent
  },
  {
    path: 'useless-facts',
    component: UselessFactsComponent
  },
  {
    path: 'login',
    component: LoginPageComponent
  },
  {
    path: 'sign-up',
    component: SignUpPageComponent
  }
];

@NgModule({
	imports: [RouterModule.forRoot(routes)],
	exports: [RouterModule]
})
export class AppRoutingModule { }
