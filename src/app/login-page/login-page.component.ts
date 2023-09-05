import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent {
  constructor(private router: Router) { }

  userLogin() {
    // Perform your login logic here.

    // Assuming the login is successful, navigate to the desired page.
    this.router.navigate(['/main']);
  }

  idCheck(){
    
  }
}
