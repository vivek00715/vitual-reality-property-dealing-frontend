import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Subject } from 'rxjs';

export interface User {
  address: string;
  email: string;
  mobile: string;
  name: string;
  token: string;
  profileImage: string;
}

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private baseUrl = 'http://localhost:8080';
  private user: User | null = null; // initially user is null i.e not logged in
  loggedIn = false; // initially assume user is not logged in
  authStateChanged = new Subject<void>(); // will emit if auth state is changed (login, logout etc)

  constructor(private http: HttpClient) {
    // check if user information exists in local storage
    const user: User = JSON.parse(localStorage.getItem('user') || 'null');
    if (user) {
      // user is present, do login
      this.setUser(user);
    }
  }

  login(email: string, password: string): void {
    this.http
      .post<User>(`${this.baseUrl}/login`, {
        email,
        password,
      })
      .subscribe(this.setUser, (err) => {
        console.error(err);
      });
  }

  signup(
    email: string,
    password: string,
    name: string,
    address: string,
    mobile: string
  ): void {
    this.http
      .post<User>(`${this.baseUrl}/signup`, {
        email,
        password,
        name,
        address,
        mobile,
      })
      .subscribe(this.setUser, (err) => console.log(err));
  }

  logout() {
    this.user = null;
    this.loggedIn = false;
    localStorage.removeItem('user');
    this.authStateChanged.next();
  }
  private setUser = (user: User): void => {
    // helper method to set user
    this.user = user;

    if (!this.user.profileImage) {
      // use a placeholder image if the user has not set profile image
      this.user.profileImage = '/assets/images/user.png';
    }

    localStorage.setItem('user', JSON.stringify(this.user)); // persist the user
    this.loggedIn = true;
    this.authStateChanged.next(); // notify everyone that auth has changed
  };
}
