import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {BaseUrlService} from './base-url.service';

@Injectable()
export class CityDetailService {

  url='http://localhost:8080';
  constructor(private http: HttpClient, private baseUrlService: BaseUrlService) {
    this.url = baseUrlService.getBaseUrl();
  }

  getCityDetail(city:string)
  {
    return this.http.get(this.url+'/city/'+city);
  }

}
