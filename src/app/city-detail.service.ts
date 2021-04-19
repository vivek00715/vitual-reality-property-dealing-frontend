import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable()
export class CityDetailService {

  url='http://localhost:8080';
  constructor(private http:HttpClient) {

  }

  getCityDetail(city:string)
  {
    return this.http.get(this.url+'/city/'+city);
  }

}
