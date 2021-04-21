
import { Component, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { PropertySearchService } from '../property-search.service';
import { AuthService } from '../auth.service';
import { StateCityService } from '../state-city.service';
import { Options, LabelType } from "@angular-slider/ngx-slider";

@Component({
  selector: 'app-property-search-header',
  templateUrl: './property-search-header.component.html',
  styleUrls: ['./property-search-header.component.scss']
})

export class PropertySearchHeaderComponent implements OnInit {
  @Input() state = '';
  @Input() city = ''; // incase we want to set from outside
  hamburger = false;
  propertyService: PropertySearchService;
  searchProperty!: FormGroup;
  activeSlider=false;

  constructor(public cityStateService:StateCityService,propertyService:PropertySearchService, private router:Router, private activatedRoute:ActivatedRoute, public authService: AuthService){
     this.propertyService = propertyService;
     this.searchProperty = new FormGroup({
      'street': new FormControl(null),
      'city': new FormControl(this.city),
      'state': new FormControl(this.state, Validators.required),
      'type': new FormControl(''),
      'budget': new FormControl('')
    });
     this.activatedRoute.queryParamMap.subscribe((query:any)=>{
        console.log(query);
        this.searchProperty.patchValue(query.params);
     })

  }

  minPrice:number=0;
  maxPrice: number = 100000000;
  options: Options = {
    floor: 0,
    ceil: 100000000,
    translate: (value: number , label: LabelType): string => {
      switch (label) {
        case LabelType.Low:
          return "<b>Min price:</b> ₹" + value;
        case LabelType.High:
          return "<b>Max price:</b> ₹" + value;
        default:
          return "₹" + value;
      }
    }
  };


  ngOnInit(): void {}

  ngOnChanges() {
    if(this.state && !this.searchProperty.value.state){
      this.searchProperty.patchValue({state: this.state});
    }
    if(this.city && !this.searchProperty.value.city){
      this.searchProperty.patchValue({city: this.city});
    }
  }

 toggleSlider()
 {
   this.activeSlider=this.activeSlider==false?this.activeSlider=true:this.activeSlider=false;
 }

  handleSearchProperty() {
    const data = this.searchProperty.value;
    console.log(data.city);
    this.router.routeReuseStrategy.shouldReuseRoute = () => false;
    this.router.onSameUrlNavigation = 'reload';
    const {street, city, type, budget, state} = data;
    const queryParams: { [e: string]: any } = {street, city, state,minPrice:this.minPrice,maxPrice:this.maxPrice};
    if (type) {
      queryParams.type = type;
    }

    this.router.navigate(['/property/', data.state], {
      queryParams
    });

    //  this.router.navigate([this.currentUrl]);
  }


  getStates() {
    return this.cityStateService.getStates();
  }

  getCities() {
    const {state} = this.searchProperty.value;
    if (state) {
      return this.cityStateService.getCities(state);
    }
    return [];
  }

}


