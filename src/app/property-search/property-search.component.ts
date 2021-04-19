import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import {Pipe, PipeTransform} from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { ActivatedRoute, Router } from '@angular/router';
import { PropertySearchService } from '../property-search.service';

@Pipe({name: 'safe'})
export class SafePipe implements PipeTransform {
  constructor(private sanitizer: DomSanitizer) { }
  transform(url:string) {
   return this.sanitizer.bypassSecurityTrustResourceUrl(url);
    }
}

@Component({
  selector: 'app-property-search',
  templateUrl: './property-search.component.html',
  styleUrls: ['./property-search.component.scss']
})
export class PropertySearchComponent implements OnInit {

  propertyService:PropertySearchService;

  mapSrc="";
  Api="https://www.google.com/maps/embed/v1/place?key=AIzaSyD2TLiALPifHWu9QDw25D1cLsSYTYrOaUk&q=";
  city="";
  street="";
  state="";
  propertyType="";
  cityDescription="";
  propertyId=0;

  list=[{"propertyId":0,
  "address":"",
  "city":"",
  "state":"",
  "pinCode":"",
  "area":0,
  "bathrooms":"",
  "bedrooms":"",
  "bhk":0,
  "floors":0,
  "ownerEmail":"",
  "price":0,
  "type":"",
  "purpose":"",
  "built_year":0,
  "description":""}]

  constructor(propertyService:PropertySearchService, private activatedRoute:ActivatedRoute, private router:Router) {
    this.propertyService=propertyService;

    this.activatedRoute.queryParamMap.subscribe((query:any)=>{
      console.log(query.params.city);
      this.street=query.params.street;
      this.city=query.params.city;
      this.state=query.params.state;
   })



    if(this.street!=null)
    this.mapSrc=this.Api+this.street+this.city+this.state;
    else if(this.city!=null)
    this.mapSrc=this.Api+this.city+this.state;
    else
    this.mapSrc=this.Api+this.state;

    this.propertyService.getPropertyByAddress(this.street,this.city,this.state).subscribe((response:any)=>{
      this.list=response;
      console.log(this.list)
    })

  }

  ngOnInit(): void {

  }

  showProperty(index:number)
  {
    this.propertyId=this.list[index]['propertyId'];
    this.router.navigate(['/property/',this.propertyId],{ queryParams: {id:this.propertyId}});
  }


}
