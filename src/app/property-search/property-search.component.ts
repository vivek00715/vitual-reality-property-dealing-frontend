import { LabelType, Options } from '@angular-slider/ngx-slider';
import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import {Pipe, PipeTransform} from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { DomSanitizer } from '@angular/platform-browser';
import { ActivatedRoute, Router } from '@angular/router';
import { CityDetailService } from '../city-detail.service';
import { PropertySearchService } from '../property-search.service';
import { StateCityService } from '../state-city.service';

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
  forr="";
  type="";
  street="";
  state="";
  propertyType="";
  cityDescription="No description Available";
  propertyId=0;
  stateResult: string[] = [];
  cityResult: string[] = [];

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
  mapheight:number;
  searchProperty!: FormGroup;

  activeSlider = false;
  minPrice: number = 0;
  maxPrice: number = 100000000;

  constructor(public cityStateService:StateCityService,propertyService:PropertySearchService, cityService:CityDetailService, private activatedRoute:ActivatedRoute, private router:Router) {

    this.searchProperty = new FormGroup({
      street: new FormControl(null),
      forr:new FormControl(this.forr),
      city: new FormControl(this.city),
      state: new FormControl(this.state),
      type: new FormControl(this.type),
      budget: new FormControl(''),
    });

    this.activatedRoute.queryParamMap.subscribe((query: any) => {
      console.log(query);
      this.searchProperty.patchValue(query.params);
    });

    this.mapheight=window.innerHeight;

    this.propertyService=propertyService;
    this.cityService=cityService;

    this.activatedRoute.queryParamMap.subscribe((query:any)=>{
      console.log(query);
      this.street=query.params.street==null?"":query.params.street;
      this.city=query.params.city==null?"":query.params.city;
      this.state=query.params.state==null?"":query.params.state;
      this.propertyType=query.params.type==null?"":query.params.type;
      this.forr=query.params.forr==null?"all":query.params.forr;
      this.minPrice=query.params.minPrice==null?"0":query.params.minPrice;
      this.maxPrice=query.params.maxPrice==null?"10000000":query.params.maxPrice;
    })

    console.log(this.minPrice+" "+this.maxPrice);

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

      if(this.searchProperty.value.forr=="All")
      {
        this.showAll();
      }
      else if(this.searchProperty.value.forr=="Buy")
      {
        this.showBuy();
      }
      else if(this.searchProperty.value.forr=="Rent"){
        this.showRent();
      }

    })

    console.log(this.searchProperty.value.forr);


    const detail:string=(this.city==null)?this.state:this.city;


  }

  options: Options = {
    floor: 0,
    ceil: 50000000,
    step: 100000,
    translate: (value: number, label: LabelType): string => {
      switch (label) {
        case LabelType.Low:
          return '<b>Min price:</b> ₹' + value;
        case LabelType.High:
          return '<b>Max price:</b> ₹' + value;
        default:
          return '₹' + value;
      }
    },
  };

  ngOnInit(): void {

  }


  toggleSlider(event: any) {
    event.preventDefault();
    this.activeSlider =
      this.activeSlider == false
        ? (this.activeSlider = true)
        : (this.activeSlider = false);

    console.log(this.minPrice+" "+this.maxPrice);
  }

  handleSearchProperty() {
    const data = this.searchProperty.value;
    console.log(data);
    this.router.routeReuseStrategy.shouldReuseRoute = () => false;
    this.router.onSameUrlNavigation = 'reload';
    const { street, city, type, forr, state } = data;
    const queryParams: { [e: string]: any } = {
      street,
      city,
      state,
      minPrice: this.minPrice,
      maxPrice: this.maxPrice,
      forr,
    };
    if (type) {
      queryParams.type = type;
    }

    this.router.navigate(['/property/', data.state], {
      queryParams,
    });

    //  this.router.navigate([this.currentUrl]);
  }

  ngOnChanges() {
    if (this.state && !this.searchProperty.value.state) {
      this.searchProperty.patchValue({ state: this.state });
    }
    if (this.city && !this.searchProperty.value.city) {
      this.searchProperty.patchValue({ city: this.city });
    }
    if (this.forr && !this.searchProperty.value.forr) {
      this.searchProperty.patchValue({ forr:this.forr });
    }
    if (this.type && !this.searchProperty.value.type) {
      this.searchProperty.patchValue({ type:this.type });
    }

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

  searchState(event: any): void {
    this.stateResult = this.cityStateService
      .getStates()
      .filter((state) =>
        state.toLowerCase().includes(event.target.value.toLowerCase())
      );
    this.searchCity('');
  }

  searchCity(event: any): void {
    this.cityResult = this.cityStateService
      .getCities(this.searchProperty.value.state)
      .filter((city) =>
        city.toLowerCase().includes(event.target.value.toLowerCase())
      );
  }

  getStates() {
    return this.cityStateService.getStates();
  }

  getCities() {
    const { state } = this.searchProperty.value;
    if (state) {
      return this.cityStateService.getCities(state);
    }
    return [];
  }

  deleteAll(list:any)
  {
    list.length=0;
  }


}
