import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import {Pipe, PipeTransform} from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { ActivatedRoute, Router } from '@angular/router';
import { CityDetailService } from '../city-detail.service';
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
  cityService:CityDetailService;

  myChoice='all';

  mapSrc="";
  // Api="https://maps.googleapis.com/maps/api/js?key=AIzaSyA1uIgJLlFocMlwcu8b3wKPKkdT2mWV3AU&libraries=common,util,map,overlay,onion,controls,stats,places,geometry&v=3.44"
  Api="https://www.google.com/maps/embed/v1/place?key=AIzaSyD2TLiALPifHWu9QDw25D1cLsSYTYrOaUk&q=";
  city="";
  street="";
  state="";
  propertyType="";
  cityDescription="No description Available";
  propertyId=0;
  minPrice=0;
  maxPrice=2147483647;

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

  list_dummy=[{"propertyId":0,
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

  list_copy=this.list;

  constructor(propertyService:PropertySearchService, cityService:CityDetailService, private activatedRoute:ActivatedRoute, private router:Router) {

    this.propertyService=propertyService;
    this.cityService=cityService;

    this.activatedRoute.queryParamMap.subscribe((query:any)=>{
      this.street=query.params.street==null?"":query.params.street;
      this.city=query.params.city==null?"":query.params.city;
      this.state=query.params.state==null?"":query.params.state;
      this.propertyType=query.params.type==null?"":query.params.type;
      this.minPrice=query.params.minPrice==0?0:query.params.minPrice;
      this.maxPrice=query.params.maxPrice==2147483647?2147483647:query.params.maxPrice;

    })



    if(this.street!=null)
    this.mapSrc=this.Api+this.street+this.city+this.state;
    else if(this.city!=null)
    this.mapSrc=this.Api+this.city+this.state;
    else
    this.mapSrc=this.Api+this.state;
    this.propertyService.getPropertyByAddress(this.street,this.city,this.state,this.propertyType,this.minPrice,this.maxPrice).subscribe((response:any)=>{
      this.list=response;
      this.list_copy=this.list;
      console.log(this.list)
    })

    const detail:string=(this.city==null)?this.state:this.city;

    this.cityService.getCityDetail(detail).subscribe((respo:any)=>{
      console.log(detail);
      console.log(respo);
      this.cityDescription=respo.description;
    })

  }

  ngOnInit(): void {

  }

  showProperty(index:number)
  {
    this.propertyId=this.list[index]['propertyId'];
    this.router.navigate(['/property/id',this.propertyId],{ queryParams: {id:this.propertyId}});
  }

  showAll()
  {
     this.deleteAll(this.list_dummy);
     this.list=this.list_copy;
     this.myChoice="all";
     console.log(this.list);
     console.log(this.myChoice);
  }

  showBuy()
  {
    this.myChoice="sell";
    this.deleteAll(this.list_dummy);
    for(let i=0;i<this.list_copy.length;i++)
    {
      if(this.list_copy[i].purpose=="Sell")
      {
          this.list_dummy.push(this.list_copy[i])
      }
    }
    this.list=this.list_dummy;
    console.log(this.list);
    console.log(this.myChoice);
  }

  showRent()
  {
    this.myChoice="rent";
    this.deleteAll(this.list_dummy);
    for(let i=0;i<this.list_copy.length;i++)
    {
      if(this.list_copy[i].purpose=="Rent")
      {
          this.list_dummy.push(this.list_copy[i])
      }
    }
    this.list=this.list_dummy;
    console.log(this.list);
  }

  deleteAll(list:any)
  {
    list.length=0;
  }


}
