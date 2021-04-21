import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root',
})
export class PropertyService {
  constructor(private authService: AuthService, private http: HttpClient) {}

  createProperty(createForm: any) {
    if (!this.authService.user?.token) {
      return;
    }
    this.http
      .post('http://localhost:8080/property', createForm, {
        headers: {
          Authorization: this.authService.user?.token,
        },
      })
      .subscribe(console.log);
  }
}
