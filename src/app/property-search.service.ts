import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { UxService } from './ux.service';

export interface Property {
  address: string;
  area: number;
  bathrooms: number;
  bedrooms: number;
  bhk: number;
  builtYear: number;
  city: string;
  description: string;
  floors: number;
  ownerEmail: string;
  pinCode: number;
  price: number;
  propertyId: number;
  purpose: string;
  state: string;
  type: string;
}
@Injectable()
export class PropertySearchService {
  url = 'http://localhost:8080';

  constructor(private http: HttpClient, private uxService: UxService) {}

  public getPropertyByAddress(
    street: string,
    city: string,
    state: string,
    type: string
  ) {
    return this.http.get(this.url + '/property', {
      params: {
        street: street,
        city: city,
        state: state,
        type: type,
        purpose: '',
      },
    });
  }

  public getPropertyById(id: number) {
    return this.http.get<Property>(`${this.url}/property/${id}`);
  }
}
