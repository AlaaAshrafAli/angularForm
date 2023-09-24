// login.component.ts
import { Component } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  loginData: { email: string, password: string } = { email: '', password: '' };

  onLogin() {
    // Implement login logic here
    console.log('Login clicked', this.loginData);
  }
}
