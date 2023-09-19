import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register-page',
  templateUrl: './register-page.component.html',
  styleUrls: ['./register-page.component.css']
})
export class RegisterPageComponent {
  userName: string = '';
  email: string = '';
  password: string = '';
  confirmPassword: string = '';

  constructor(private router: Router) { }

  isCorrectPassword(){// this cannont accually create a confirmation or user id
    if(this.password !== this.confirmPassword){
      alert('Password mismatch');
    } else {
      this.router.navigate(['/main']);
    }
  }
}
