import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Subject } from 'rxjs';
import { UxService } from './ux.service';
import { Router } from '@angular/router';
import {BaseUrlService} from './base-url.service';

export interface User {
  address: string;
  email: string;
  mobile: string;
  name: string;
  token: string;
  profileImage: string;
  isAdministrator:boolean;
}

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private baseUrl = 'http://localhost:8080';
  public user: User | null = null; // initially user is null i.e not logged in
  loggedIn = false; // initially assume user is not logged in
  authStateChanged = new Subject<void>(); // will emit if auth state is changed (login, logout etc)

  constructor(private http: HttpClient, private ux: UxService , private router: Router, private baseUrlService: BaseUrlService) {
    // check if user information exists in local storage
    const user: User = JSON.parse(localStorage.getItem('user') || 'null');
    if (user) {
      // user is present, do login
      this.setUser(user);
    }
    this.baseUrl = this.baseUrlService.getBaseUrl();
  }

  login(email: string, password: string): void {
    this.ux.showSpinner();
    this.http
      .post<User>(`${this.baseUrl}/login`, {
        email,
        password,
      })
      .subscribe(this.setUser, this.handleError);
  }

  signup(
    email: string,
    password: string,
    name: string,
    address: string,
    mobile: string
  ): void {
    this.ux.showSpinner();
    this.http
      .post<User>(`${this.baseUrl}/signup`, {
        email,
        password,
        name,
        address,
        mobile,
      })
      .subscribe(this.setUser, this.handleError);
  }

  logout() {
    this.user = null;
    this.loggedIn = false;
    localStorage.removeItem('user');
    this.authStateChanged.next();
    this.router.navigate(['/']);
  }
  private setUser = (user: User): void => {
    // helper method to set user
    this.ux.hideSpinner();
    this.ux.showToast('Success', `Hello, ${user.name}`);
    this.user = user;
    if (!this.user.profileImage) {
      // use a placeholder image if the user has not set profile image
      this.user.profileImage = '/assets/images/user.png';
    }

    localStorage.setItem('user', JSON.stringify(this.user)); // persist the user
    this.loggedIn = true;
    this.authStateChanged.next(); // notify everyone that auth has changed
  };

  private handleError = (err: any) => {
    this.ux.hideSpinner();
    let errorMessage = err.error;
    if (typeof errorMessage != 'string') {
      errorMessage = err.statusText || err.message || 'Something went wrong';
    }
    this.ux.showToast('Error', errorMessage, true);
  };
}
