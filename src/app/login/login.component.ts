import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { FormsModule } from '@angular/forms';
import { ToastModule } from 'primeng/toast';
import { MessageService } from 'primeng/api';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  standalone: true,
  imports: [FormsModule, ToastModule],
  providers: [MessageService]
})
export class LoginComponent {
  username: string = '';
  password: string = '';

  constructor(private authService: AuthService, private router: Router, private messageService: MessageService) { }

  async login() {
    try {
      const result = await this.authService.login(this.username, this.password);
      if (result) {
        this.router.navigate(['/home']);
        this.messageService.add({ severity: 'success', summary: 'Success', detail: 'Login successful' });
      }
    } catch (error) {
      console.error('Login failed', error);
      this.messageService.add({ severity: 'error', summary: 'Error', detail: 'Login failed. Please check your username and password.' });
    }
  }
}