import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-password-page',
  templateUrl: './password-page.component.html',
  styleUrls: ['./password-page.component.css']
})
export class PasswordPageComponent {

  private password: string = '12345';
  protected enteredPassword: string = '';

  protected correctpassword: boolean = false;
  isWrong = true;

  filledDots = 0;

  constructor(private router: Router) { }

  fillDot(number: number): void {
    const dots = document.querySelectorAll('.dot');
    if (this.filledDots < dots.length) {
      dots[this.filledDots].classList.add('filled');
      this.enteredPassword += number.toString();
      this.filledDots++;
    }
  }

  unfilledDot() {
    const dots = document.querySelectorAll('.dot');
    if (this.filledDots > 0) {
      dots[this.filledDots - 1].classList.remove('filled');
      this.enteredPassword = this.enteredPassword.slice(0, -1);// remove the entered password
      this.filledDots--;
    }
  }

  checkPasswords() {
    if (this.enteredPassword === this.password) {
      console.log('Password is correct');
      this.router.navigate(['/main']);
      this.showWrongPasswordMessage(true);
    } else {
      console.log('Password is incorrect');
      this.showWrongPasswordMessage(false);
    }
    this.clearEnteredPassword();// clear the password after check
  }

  clearEnteredPassword(): void {
    this.filledDots = 0;
    this.enteredPassword = '';
    const dots = document.querySelectorAll('.dot');
    dots.forEach(dot => dot.classList.remove('filled'));
  }

  showWrongPasswordMessage(isWrong: boolean){
    this.isWrong = isWrong;
  }
}
