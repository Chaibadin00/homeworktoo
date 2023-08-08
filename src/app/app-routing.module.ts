import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PasswordPageComponent } from './password-page/password-page.component';


const routes: Routes = [
  // ... (other routes)
  { path: '', redirectTo: '/password', pathMatch: 'full' },
  { path: 'password', component: PasswordPageComponent },
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  
})
export class AppRoutingModule { }
