import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';
import { StateCityService } from '../state-city.service';

@Component({
  selector: 'app-landing-header',
  templateUrl: './landing-header.component.html',
  styleUrls: ['./landing-header.component.scss'],
})
export class LandingHeaderComponent implements OnInit {
  headerOpen = false;

  searchForm = new FormGroup({});
  images: string[] = [
    '/assets/images/header-background4.jpg',
    '/assets/images/header-background2.jpg',
    '/assets/images/header-background3.jpg',
    '/assets/images/header-background7.jpg',
    '/assets/images/header-background5.jpg',
    '/assets/images/header-background6.jpg',
  ];
  changeBackgroundCounter = 0;
  storedInterval: any;
  minPrice = 0;
  maxPrice = 100000000;

  constructor(
    private router: Router,
    public authService: AuthService,
    private cityStateService: StateCityService
  ) {
    this.storedInterval = setInterval(() => {
      this.changeBackgroundCounter = this.changeBackgroundCounter + 1;
      if (this.changeBackgroundCounter > this.images.length - 1) {
        this.changeBackgroundCounter = 0;
      }
    }, 5000);
  }

  getStates() {
    return this.cityStateService.getStates();
  }

  getCities() {
    const { state } = this.searchForm.value;
    if (state) {
      return this.cityStateService.getCities(state);
    }
    return [];
  }

  getImage() {
    return this.images[this.changeBackgroundCounter];
  }

  ngOnInit(): void {
    this.searchForm = new FormGroup({
      city: new FormControl(''),
      state: new FormControl('', Validators.required),
      type: new FormControl(''),
      budget: new FormControl(''),
    });
  }

  ngOnDestroy() {
    clearInterval(this.storedInterval);
  }

  onSubmit() {
    //console.log(this.searchForm.value.city , this.searchForm.value.propertytype , this.searchForm.value.budget);
    let statename = this.searchForm.value.state;
    //redirecting to issues page after submitting the form
    this.router.navigate(['/property/', statename], {
      queryParams: {
        city: this.searchForm.value.city,
        state: this.searchForm.value.state,
        type: this.searchForm.value.type,
        minPrice: this.minPrice,
        maxPrice: this.maxPrice,
      },
    });
  }
}
