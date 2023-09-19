import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
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

const routes: Routes = [
  {
    path: 'password',// homework
    component: PasswordPageComponent
  },
  {
    path: 'login',
    component: LoginPageComponent,
  },
  {
    path: 'register',
    component: RegisterPageComponent,
  },
  {
    path: 'main',
    component: MainPageComponent,
    children: [
      { path: '', redirectTo: 'home', pathMatch: 'full' },
      { path: 'home', component: HomePageComponent },
      { path: 'product', component: ProductPageComponent },
      { path: 'product/:id', component: ProductDetailComponent },
      { path: 'property', component: PropertyPageComponent },
      { path: 'property/:id', component: PropertyPageDetailComponent },
      { path: 'about', component: AboutUsPageComponent },
    ]
  },
  {
    path: 'admin-login',
    component: AdminLoginComponent,
  },
  {
    path: 'admin',
    component: AdminMainComponent,
    children: [
      { path: '', redirectTo: 'product-manage', pathMatch: 'full' },
      { path: 'product-manage', component: ProductManageComponent},
      { path: 'user-manage', component: UserManageComponent},
      { path: 'properties-manage', component: PropertiesManageComponent},
      { path: 'key', component: KeyComponent}
    ]
  },
  { path: '', redirectTo: '/login', pathMatch: 'full' }, // Redirect to the main page by default
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
