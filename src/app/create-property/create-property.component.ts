import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../auth.service';
import { PropertyService } from '../property.service';
import { StateCityService } from '../state-city.service';
import { UxService } from '../ux.service';
import { Router } from '@angular/router';
import { PrimeIcons } from 'primeng/api';

export interface Testimonial {
  name: string;
  designation: string;
  content: string;
}

@Component({
  selector: 'app-create-property',
  templateUrl: './create-property.component.html',
  styleUrls: ['./create-property.component.scss'],
})
export class CreatePropertyComponent implements OnInit {
  headerOpen = false;
  createForm = new FormGroup({});
  year: number[] = [];
  floor: number[] = [];
  bhk: number[] = [];

  city: string = '';

  test: Testimonial[] = [
    {
      name: 'Harshit Pal',
      designation: 'Owner, New Delhi',
      content:
        'Several options are available in terms of locations, property type and price. It would be great if HashHomes provides more preferences in tier II cities also.',
    },
    {
      name: 'Vivek Shukla',
      designation: 'Owner, Chennai',
      content:
        'Creativity combined with excellent technical capabilities, I am thankful to HashHomes.com for its services',
    },
    {
      name: 'Yash Agrawal',
      designation: 'Dealer, Mumbai',
      content:
        'Prompt response and offered constant assistance after posting my ad on the website',
    },
    {
      name: 'Hitesh Dullu',
      designation: 'Dealer, Mumbai',
      content:
        'Thanks to HashHomes.com for its exclusive services and prompt assistance to help me post my rental property advertisement.',
    },
  ];

  constructor(
    public authService: AuthService,
    private propertyService: PropertyService,
    private cityStateService: StateCityService,
    private uxService: UxService,
    private router: Router
  ) {}

  ngOnInit(): void {
    for (let year = 1990; year <= 2021; year++) {
      this.year.push(year);
    }

    for (let floor = 1; floor <= 100; floor++) {
      this.floor.push(floor);
    }

    for (let bhk = 1; bhk <= 5; bhk++) {
      this.bhk.push(bhk);
    }

    //create reactive form element comments inside this is for future changes in API
    this.createForm = new FormGroup({
      address: new FormControl(null, [
        Validators.required,
        Validators.maxLength(350),
      ]),
      area: new FormControl(null, Validators.required),
      bathrooms: new FormControl(1, Validators.required),
      bedrooms: new FormControl(1, Validators.required),
      bhk: new FormControl(1, Validators.required),
      builtYear: new FormControl(1990, Validators.required),
      city: new FormControl('', Validators.required),
      description: new FormControl(null, [
        Validators.required,
        Validators.maxLength(350),
      ]),
      floors: new FormControl(1, Validators.required),
      // 'owneremail' : new FormControl(null),
      pinCode: new FormControl(null, [
        Validators.required,
        Validators.minLength(6),
        Validators.maxLength(6),
      ]),
      price: new FormControl(null, Validators.required),
      purpose: new FormControl(null, Validators.required),
      state: new FormControl('', Validators.required),
      type: new FormControl(null, Validators.required),
    });
  }

  getStates() {
    return this.cityStateService.getStates();
  }

  getCities() {
    const { state } = this.createForm.value;
    if (state) {
      return this.cityStateService.getCities(state);
    }
    return [];
  }

  onSubmit() {
    if (!this.createForm.valid) {
      return;
    }
    this.uxService.showSpinner();
    // console.log(this.createForm.value.pincode);
    // this.createForm.value.owneremail = this.authService.user?.email;
    this.propertyService.createProperty(this.createForm.value).subscribe(
      (res) => {
        this.uxService.hideSpinner();
        this.uxService.showToast('Success', 'Property created successfully');
        this.router.navigate(['/']);
      },
      (err) => {
        console.error(err);
        this.uxService.hideSpinner();
        this.uxService.handleError(err);
      }
    );
  }
}
