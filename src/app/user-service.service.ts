import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BaseUrlService } from './base-url.service';
import { AuthService } from './auth.service';

export interface User {
  address: string;
  email: string;
  mobile: string;
  name: string;
  userImage: string;
}

@Injectable({
  providedIn: 'root',
})
export class UserServiceService {
  constructor(
    private authService: AuthService,
    private http: HttpClient,
    private baseUrlService: BaseUrlService
  ) {}

  getUserById(userid: string | any) {
    return this.http.get<User>(
      this.baseUrlService.getBaseUrl() + '/user/' + userid,
      { headers: { Authorization: this.authService.user?.token + '' } }
    );
  }

  updateUserById(userBody: User) {
    return this.http.put<User>(
      this.baseUrlService.getBaseUrl() + '/user/',
      userBody,
      { headers: { Authorization: this.authService.user?.token + '' } }
    );
  }
}
