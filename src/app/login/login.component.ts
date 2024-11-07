import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service'; 
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  standalone: true,
  imports: [FormsModule]
})
export class LoginComponent {
  username: string = '';
  password: string = '';

  constructor(private authService: AuthService, private router: Router) {}

  async login() {
    try {
      const result = await this.authService.login(this.username, this.password);
      if (result) {
        this.router.navigate(['/home']);
        //alert('Login correcto');
      }
    } catch (error) {
      console.error('Login failed', error);
      alert('Login incorrecto. Por favor, verifica tu nombre de usuario y contraseña.');
    }
  }
}