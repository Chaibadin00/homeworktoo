import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PasswordPageComponent } from './password-page/password-page.component';
import { MainPageComponent } from './main-page/main-page.component';
import { HomePageComponent } from './main-page/home-page/home-page.component';
import { ProductPageComponent } from './main-page/product-page/product-page.component';
import { AboutUsPageComponent } from './main-page/about-us-page/about-us-page.component';
import { ProductDetailComponent } from './main-page/product-detail/product-detail.component';

const routes: Routes = [
  {
    path: 'password',// homework
    component: PasswordPageComponent
  },
  {
    path: 'main',
    component: MainPageComponent,
    children: [
      { path: '', redirectTo: 'home', pathMatch: 'full' },
      { path: 'home', component: HomePageComponent },
      { path: 'product', component: ProductPageComponent },
      { path: 'about', component: AboutUsPageComponent },
      { path: 'product/:id', component: ProductDetailComponent },
    ]
  },
  { path: '', redirectTo: '/password', pathMatch: 'full' }, // Redirect to the main page by default
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
