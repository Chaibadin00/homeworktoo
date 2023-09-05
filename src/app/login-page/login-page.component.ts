import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent {
  email: string = ''
  password: string = ''

  constructor(private router: Router) { }

  

  userLogin() {
    // Perform your login logic here.
    this.idCheck()
    this.router.navigate(['/main']);
  }

  idCheck(){
    console.log(this.email)
    console.log(this.password)
    
  }
}
