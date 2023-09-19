import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PasswordPageComponent } from './password-page/password-page.component';
import { MainPageComponent } from './main-page/main-page.component';
import { HomePageComponent } from './main-page/home-page/home-page.component';
import { ProductPageComponent } from './main-page/product-page/product-page.component';
import { AboutUsPageComponent } from './main-page/about-us-page/about-us-page.component';
import { ProductDetailComponent } from './main-page/product-detail/product-detail.component';
import { AdminMainComponent } from './admin-main/admin-main.component';
import { PropertyPageComponent } from './main-page/property-page/property-page.component';
import { PropertyPageDetailComponent } from './main-page/property-page-detail/property-page-detail.component';
import { LoginPageComponent } from './login-page/login-page.component';
import { RegisterPageComponent } from './register-page/register-page.component';
import { ProductManageComponent } from './admin-main/product-manage/product-manage.component';
import { UserManageComponent } from './admin-main/user-manage/user-manage.component';
import { PropertiesManageComponent } from './admin-main/properties-manage/properties-manage.component';
import { KeyComponent } from './admin-main/key/key.component';
import { AdminLoginComponent } from './admin-login/admin-login.component';

@NgModule({
  declarations: [
    AppComponent,
    PasswordPageComponent,
    MainPageComponent,
    HomePageComponent,
    ProductPageComponent,
    AboutUsPageComponent,
    ProductDetailComponent,
    AdminMainComponent,
    PropertyPageComponent,
    PropertyPageDetailComponent,
    LoginPageComponent,
    RegisterPageComponent,
    ProductManageComponent,
    UserManageComponent,
    PropertiesManageComponent,
    KeyComponent,
    AdminLoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
