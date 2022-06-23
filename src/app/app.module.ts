import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import {ClipboardModule} from 'ngx-clipboard';
import {ToastrModule} from 'ngx-toastr';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { UselessFactsComponent } from './useless-facts/useless-facts.component';
import { HomePageComponent } from './home-page/home-page.component';
import { LoginPageComponent } from './login-page/login-page.component';
import { SignUpPageComponent } from './sign-up-page/sign-up-page.component';
import { SignUpPage2Component } from './sign-up-page2/sign-up-page2.component';

@NgModule({
	declarations: [
		AppComponent,
  UselessFactsComponent,
  HomePageComponent,
  LoginPageComponent,
  SignUpPageComponent,
  SignUpPage2Component
	],
	imports: [
		BrowserModule,
		AppRoutingModule,
		FormsModule,
    ReactiveFormsModule,
		HttpClientModule,
		ClipboardModule,
		BrowserAnimationsModule,
		ToastrModule.forRoot()
	],
	providers: [],
	bootstrap: [AppComponent]
})
export class AppModule { }
