import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AuthService } from './auth.service';
import { BaseUrlService } from './base-url.service';
import { Observable } from 'rxjs';
import { Property } from './property-search.service';
import {FormBuilder} from '@angular/forms';

export interface PropertyRequestBody {
  address: string;
  area: number;
  bathrooms: number;
  bedrooms: number;
  bhk: number;
  builtYear: number;
  city: string;
  description: string;
  floors: number;
  pinCode: number;
  price: number;
  purpose: string;
  state: string;
  type: string;
}

@Injectable({
  providedIn: 'root'
})
export class PropertyService {
  private baseUrl = '';
  constructor(
    private authService: AuthService,
    private http: HttpClient,
    private baseUrlService: BaseUrlService,
    private fb: FormBuilder
  ) {
    this.baseUrl = baseUrlService.getBaseUrl();
  }

  createProperty(propertyBody: PropertyRequestBody): Observable<Property> {
    return this.http.post<Property>(`${this.baseUrl}/property`, propertyBody, {
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

  editProperty(createForm: any, id: number): Observable<Property> {
    return this.http.patch<Property>(
      `${this.baseUrl}/patch/` + id,
      createForm,
      {
        headers: {
          Authorization: this.authService.user?.token || '',
        },
      }
    );
  }

  deleteProperty(id: number) {
    console.log(id);
    return this.http.delete(`${this.baseUrl}/delete/` + id);
  }

  uploadImage(image: File, propertyId: number): Observable<Property> {
    const formData = new FormData();
    formData.append('image', image);
    return this.http.post<Property>(`${this.baseUrl}/property/${propertyId}/image`, formData, {
      headers : {
        Authorization: this.authService.user?.token || ''
      }
    });
  }
}
