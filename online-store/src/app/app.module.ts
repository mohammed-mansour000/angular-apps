import { environment } from './../environments/environment';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeaderComponent } from './shared/header/header.component';
import { FooterComponent } from './shared/footer/footer.component';
import { AboutUsComponent } from './shared/about-us/about-us.component';
import { CustommaterialModule } from './custommaterial/custommaterial.module';
import { SettingsComponent } from './settings/settings.component';
import { SetProductComponent } from './admin/set-product/set-product.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AdminTabComponent } from './admin/admin-tab/admin-tab.component';
import { AdminUsersComponent } from './admin/admin-users/admin-users.component';
import { AdminCartsComponent } from './admin/admin-carts/admin-carts.component';
import { AdminOrdersComponent } from './admin/admin-orders/admin-orders.component';
import { CartsComponent } from './user/carts/carts.component';
import { LoginComponent } from './user/login/login.component';
import { OrdersComponent } from './user/orders/orders.component';
import { ProductComponent } from './user/product/product.component';
import { UserComponent } from './user/user/user.component';

import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireStorageModule } from '@angular/fire/storage';
import { AngularFireAuthModule } from '@angular/fire/auth';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    AboutUsComponent,
    SettingsComponent,
    SetProductComponent,
    AdminTabComponent,
    AdminUsersComponent,
    AdminCartsComponent,
    AdminOrdersComponent,
    CartsComponent,
    LoginComponent,
    OrdersComponent,
    ProductComponent,
    UserComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    CustommaterialModule,
    FormsModule,
    ReactiveFormsModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFirestoreModule, // firestore
    AngularFireAuthModule, // auth
    AngularFireStorageModule // storage
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
