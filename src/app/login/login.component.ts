import { Component } from '@angular/core';
import { AuthService } from '../auth.service'; // Assuming you have an auth service
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  username = '';
  password = '';

  constructor(private authService: AuthService, private router: Router) {}

  onSubmit() {
    this.authService.login(this.username, this.password)
      .subscribe(
        (response) => {
          console.error('Login failed', response);
          // Handle successful login (e.g., redirect to profile page)
          this.router.navigate(['/profile']);
        },
        (error) => {
          // Handle login error (e.g., display an error message)
          console.error('Login failed', error);
        }
      );
  }
}