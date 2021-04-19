import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable()
export class PropertySearchService {

  url='http://localhost:8080';

  constructor(private http:HttpClient) {

  }


  public getPropertyByAddress(street:string,city:string,state:string)
  {
    if(street!=null)
      return this.http.get(this.url+'/property/address/'+street+"/"+city+"/"+state);
    else if(city!=null)
      return this.http.get(this.url+'/property/city/'+city);
    return this.http.get(this.url+'/property/state/'+state);
  }

}
