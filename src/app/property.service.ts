import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AuthService } from './auth.service';
import { BaseUrlService } from './base-url.service';
import { Observable } from 'rxjs';
import { Property } from './property-search.service';

@Injectable({
  providedIn: 'root',
})
export class PropertyService {
  private baseUrl = '';
  constructor(
    private authService: AuthService,
    private http: HttpClient,
    private baseUrlService: BaseUrlService
  ) {
    this.baseUrl = baseUrlService.getBaseUrl();
  }

  createProperty(createForm: any): Observable<Property> {
    return this.http.post<Property>(`${this.baseUrl}/property`, createForm, {
      headers: {
        Authorization: this.authService.user?.token || '',
      },
    });
  }

  getUserProperty(userid: string | any) {
    return this.http.get<Property[]>(
      this.baseUrl + '/owner/' + userid + '/property/'
    );
  }
}
