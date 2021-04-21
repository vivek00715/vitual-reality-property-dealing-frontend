import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable()
export class PropertySearchService {

  url='http://localhost:8080';

  constructor(private http:HttpClient) {

  }


  public getPropertyByAddress(street:string,city:string,state:string,type:string)
  {
    return this.http.get(this.url+'/property', {
      params: {
        street:street ,
        city:city,
        state:state,
        type:type,
        purpose:""
      }})
  }

}
