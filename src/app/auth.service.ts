import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private isUserLoggedIn = false;

  constructor(private http: HttpClient) { }

  login(username:any,password:any): Observable<any> {
    // Replace with your actual login endpoint and logic
    return this.http.post('/api/login', username,password);
  }

  logout() {
    // Replace with your actual logout logic (e.g., clearing tokens)
    this.isUserLoggedIn = false;
    //  localStorage.removeItem('token'); // Example
  }

  isLoggedIn(): boolean {
    return this.isUserLoggedIn;
  }
}