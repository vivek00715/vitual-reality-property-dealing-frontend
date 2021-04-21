import {AfterContentInit, AfterViewInit, Component, Input, OnInit} from '@angular/core';
import {Form, FormControl, FormGroup, Validators} from '@angular/forms';
import {ActivatedRoute, Router} from '@angular/router';
import {PropertySearchService} from '../property-search.service';
import {AuthService} from '../auth.service';
import {StateCityService} from '../state-city.service';

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

  constructor(public cityStateService: StateCityService, propertyService: PropertySearchService, private router: Router, private activatedRoute: ActivatedRoute, public authService: AuthService) {
    this.propertyService = propertyService;

    this.activatedRoute.queryParamMap.subscribe((query: any) => {
      console.log(query);
      this.searchProperty.patchValue(query.params);
    });

  }

  currentUrl = this.router.url;

  ngOnInit(): void {
    this.searchProperty = new FormGroup({
      'street': new FormControl(null),
      'city': new FormControl(this.city),
      'state': new FormControl(this.state, Validators.required),
      'type': new FormControl(''),
      'budget': new FormControl('')
    });
  }

  ngOnChanges() {
    if(this.state && !this.searchProperty.value.state){
      this.searchProperty.patchValue({state: this.state});
    }
    if(this.city && !this.searchProperty.value.city){
      this.searchProperty.patchValue({city: this.city});
    }
  }

  handleSearchProperty() {
    const data = this.searchProperty.value;
    console.log(data.city);
    this.router.routeReuseStrategy.shouldReuseRoute = () => false;
    this.router.onSameUrlNavigation = 'reload';
    const {street, city, type, budget, state} = data;
    const queryParams: { [e: string]: string } = {street, city, state};
    if (type) {
      queryParams.type = type;
    }
    if (budget) {
      queryParams.budget = budget;
    }
    this.router.navigate(['/property/', data.state], {
      queryParams
    });
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


