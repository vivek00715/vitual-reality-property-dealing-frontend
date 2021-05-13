import {HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {BaseUrlService} from './base-url.service';
import {Observable} from 'rxjs';

export interface PaginatedProperty{
  "currentPage": number;
  "totalPage": number;
  "totalResults": number;
  data:PropertyShort[]
}

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
  images:{
    publicId:string;
    url:string;
  }[];
}

export interface PropertyShort{
  address:string;
  area:number;
  bathrooms:number;
  bedrooms:number;
  purpose:string;
  bhk: number;
  city: string;
  floors: number;
  image: string;
  pinCode: number;
  price: number;
  propertyId: number;
  state: string;
  built_year:number;
  type:string;
}

@Injectable()
export class PropertySearchService {
  url = 'http://localhost:8080';


  constructor(private http: HttpClient, private baseUrlService: BaseUrlService) {
    this.url = this.baseUrlService.getBaseUrl();
  }


  public getPropertyByAddress(
    street: string,
    city: string,
    state: string,
    type: string,
    minPrice: any,
    maxPrice: any,
    purpose:any,
    page=1,
  ) {
    console.log(purpose);
    return this.http.get<PaginatedProperty>(this.url + '/property', {
      params: {
        street: street,
        city: city,
        state: state,
        type: type,
        minPrice: minPrice,
        maxPrice: maxPrice,
        purpose: purpose,
        page:page+'',
      },
    });
  }

  public getPropertyById(id: number): Observable<Property> {
    return this.http.get<Property>(`${this.url}/property/${id}`);
  }
}
