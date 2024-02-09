import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) { }

  login(email: string, password: string): Promise<any> {
    return this.http.post<any>(`${environment.apiUrl}/login`, { email, password }).toPromise();
  }

  register(name: string, email: string, password: string): Promise<any> {
    return this.http.post<any>(`${environment.apiUrl}/register`, { name, email, password }).toPromise();
  }

  logout(): void {
    localStorage.removeItem('token');
  }

  isAuthenticated(): boolean {
    return localStorage.getItem('token') !== null;
  }

}
