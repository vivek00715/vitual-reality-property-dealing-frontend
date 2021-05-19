import {LabelType, Options} from '@angular-slider/ngx-slider';
import {Component, Input, OnDestroy, OnInit} from '@angular/core';
import {Pipe, PipeTransform} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {DomSanitizer} from '@angular/platform-browser';
import {ActivatedRoute, Router} from '@angular/router';
import {CityDetailService} from '../city-detail.service';
import {PropertySearchService, PropertyShort} from '../property-search.service';
import {StateCityService} from '../state-city.service';

@Pipe({name: 'safe'})
export class SafePipe implements PipeTransform {
  constructor(private sanitizer: DomSanitizer) {
  }

  transform(url: string) {
    return this.sanitizer.bypassSecurityTrustResourceUrl(url);
  }
}

@Component({
  selector: 'app-property-search',
  templateUrl: './property-search.component.html',
  styleUrls: ['./property-search.component.scss']
})
export class PropertySearchComponent implements OnInit {

  propertyService: PropertySearchService;
  cityService: CityDetailService;

  myChoice = 'all';

  mapSrc = '';
  // Api="https://maps.googleapis.com/maps/api/js?key=AIzaSyA1uIgJLlFocMlwcu8b3wKPKkdT2mWV3AU&libraries=common,util,map,overlay,onion,controls,stats,places,geometry&v=3.44"
  Api = 'https://www.google.com/maps/embed/v1/place?key=AIzaSyD2TLiALPifHWu9QDw25D1cLsSYTYrOaUk&q=';
  city = '';
  for = '';
  type = 'All';
  street = '';
  state = '';
  propertyType = '';
  cityDescription = 'No description Available';
  propertyId = 0;
  stateResult: string[] = [];
  cityResult: string[] = [];

  list: PropertyShort[] = [];

  list_dummy: PropertyShort[] = [];

  list_copy = this.list;
  mapheight: number;
  searchProperty!: FormGroup;

  activeSlider = false;
  minPrice: number = 0;
  maxPrice: number = 50000000;

  currentPage = 1;
  totalResults = 0;

  constructor(public cityStateService: StateCityService, propertyService: PropertySearchService, cityService: CityDetailService, private activatedRoute: ActivatedRoute, private router: Router) {

    this.searchProperty = new FormGroup({
      street: new FormControl(null),
      for: new FormControl(this.for),
      city: new FormControl(this.city),
      state: new FormControl(this.state),
      type: new FormControl(this.type),
      budget: new FormControl(''),
    });

    this.activatedRoute.queryParamMap.subscribe((query: any) => {

      this.searchProperty.patchValue(query.params);
    });

    this.mapheight = window.innerHeight;

    this.propertyService = propertyService;
    this.cityService = cityService;

    this.activatedRoute.queryParamMap.subscribe((query: any) => {

      this.street = query.params.street == null ? '' : query.params.street;
      this.city = query.params.city == null ? '' : query.params.city;
      this.state = query.params.state == null ? '' : query.params.state;
      this.propertyType = query.params.type == null ? '' : query.params.type;
      this.for = query.params.for == null ? 'All' : query.params.for;
      this.minPrice = query.params.minPrice == null ? '0' : query.params.minPrice;
      this.maxPrice = query.params.maxPrice == null ? '50000000' : query.params.maxPrice;
    });


    if (this.street != null) {
      this.mapSrc = this.Api + this.street + this.city + this.state;
    } else if (this.city != null) {
      this.mapSrc = this.Api + this.city + this.state;
    } else {
      this.mapSrc = this.Api + this.state;
    }

    this.getProperty();
    const detail: string = (this.city == null) ? this.state : this.city;


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


  getProperty(page = 1) {
    let purpose: string;
    if (this.searchProperty.value.for == 'Buy') {
      purpose = 'Sell';
    } else if (this.searchProperty.value.for == 'All') {
      purpose = '';
    } else {
      purpose = 'Rent';
    }

    let type: string;

    if (this.propertyType == 'All') {
      type = '';
    } else {
      type = this.propertyType;
    }

    this.propertyService.getPropertyByAddress(this.street, this.city, this.state, type, this.minPrice, this.maxPrice, purpose, page).subscribe((response) => {
      this.list = response.data;
      this.list_copy = this.list;
      this.currentPage = response.currentPage;
      this.totalResults = response.totalResults;

      if (this.searchProperty.value.for == 'All') {
        this.showAll();
      } else if (this.searchProperty.value.for == 'Buy') {
        this.showBuy();
      } else if (this.searchProperty.value.for == 'Rent') {
        this.showRent();
      }

    });

  }


  toggleSlider(event: any) {
    event.preventDefault();
    this.activeSlider =
      this.activeSlider == false
        ? (this.activeSlider = true)
        : (this.activeSlider = false);

  }

  handleSearchProperty() {
    const data = this.searchProperty.value;
    this.router.routeReuseStrategy.shouldReuseRoute = () => false;
    this.router.onSameUrlNavigation = 'reload';
    const {street, city, type, state} = data;
    const queryParams: { [e: string]: any } = {
      street,
      city,
      state,
      minPrice: this.minPrice,
      maxPrice: this.maxPrice,
      for: data.for,
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
      this.searchProperty.patchValue({state: this.state});
    }
    if (this.city && !this.searchProperty.value.city) {
      this.searchProperty.patchValue({city: this.city});
    }
    if (this.for && !this.searchProperty.value.for) {
      this.searchProperty.patchValue({for: this.for});
    }
    if (this.type && !this.searchProperty.value.type) {
      this.searchProperty.patchValue({type: this.type});
    }

  }

  paginate(event: any) {
    this.getProperty(event.page + 1);
  }


  showProperty(index: number) {
    this.propertyId = this.list[index]['propertyId'];
    this.router.navigate(['/property/id', this.propertyId], {queryParams: {id: this.propertyId}});
  }

  showAll() {
    this.deleteAll(this.list_dummy);
    this.list = this.list_copy;
    this.myChoice = 'all';
  }

  showBuy() {
    this.myChoice = 'sell';
    this.deleteAll(this.list_dummy);
    for (let i = 0; i < this.list_copy.length; i++) {
      if (this.list_copy[i].purpose == 'Sell') {
        this.list_dummy.push(this.list_copy[i]);
      }
    }
    this.list = this.list_dummy;

  }

  showRent() {
    this.myChoice = 'rent';
    this.deleteAll(this.list_dummy);
    for (let i = 0; i < this.list_copy.length; i++) {
      if (this.list_copy[i].purpose == 'Rent') {
        this.list_dummy.push(this.list_copy[i]);
      }
    }
    this.list = this.list_dummy;

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
    const {state} = this.searchProperty.value;
    if (state) {
      return this.cityStateService.getCities(state);
    }
    return [];
  }

  deleteAll(list: any) {
    list.length = 0;
  }


}
