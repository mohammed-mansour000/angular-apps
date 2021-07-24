import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddRestaComponent } from './add-resta/add-resta.component';
import { UpdateRestaComponent } from './update-resta/update-resta.component';
import { ListRestaComponent } from './list-resta/list-resta.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';

import {HttpClientModule} from '@angular/common/http';

import { ReactiveFormsModule } from "@angular/forms";
import { UserModule } from './user.module';


@NgModule({
  declarations: [
    AppComponent,
    AddRestaComponent,
    UpdateRestaComponent,
    ListRestaComponent,
    LoginComponent,
    RegisterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    UserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
