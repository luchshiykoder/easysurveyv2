import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';

import { User, Login } from '@app/core';
import { environment } from '@app/env/environment';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private baseUrl = environment.apiUrl;

  $currentUser = new BehaviorSubject<User>({firstName: 'Demo', lastName: 'User', id: 1, username: 'demo', password: '12345678'});

  private headers = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  };

  constructor(
    private http: HttpClient,
    private router: Router
  ) { }

  /**
   * if we have userDetails, the user is loggedIn
   * @returns {boolean}
   */
  authenticated(): boolean {
    return !!localStorage.getItem('userDetails');
  }

  /**
   * Use this method to login and create localStorage.setItem('userDetails', JSON.stringify(user)) in the method;
   * @param loginParams {Login}
   */
  login(loginParams: Login) {
    return this.http.post(`${this.baseUrl}/users/authenticate`, loginParams, this.headers);
  }

  logout(): void {
    localStorage.removeItem('userDetails');
    this.router.navigate(['login']);
    this.$currentUser.next(null);
  }

}
