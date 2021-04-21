import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AuthService } from './auth.service';
import {BaseUrlService} from './base-url.service';

@Injectable({
  providedIn: 'root',
})
export class PropertyService {
  private baseUrl = '';
  constructor(private authService: AuthService, private http: HttpClient, private baseUrlService: BaseUrlService) {
    this.baseUrl = baseUrlService.getBaseUrl();
  }

  createProperty(createForm: any) {
    if (!this.authService.user?.token) {
      return;
    }
    this.http
      .post(`${this.baseUrl}/property`, createForm, {
        headers: {
          Authorization: this.authService.user?.token,
        },
      })
      .subscribe(console.log);
  }
}
