import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {AuthService} from '../auth.service';
import {PropertyService} from '../property.service';
import {StateCityService} from '../state-city.service';
import {UxService} from '../ux.service';
import {Router} from '@angular/router';

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

  constructor(
    public authService: AuthService,
    private propertyService: PropertyService,
    private cityStateService: StateCityService,
    private uxService: UxService,
    private router: Router
  ) {
  }

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
      bathrooms: new FormControl(null, Validators.required),
      bedrooms: new FormControl(null, Validators.required),
      bhk: new FormControl(null, Validators.required),
      builtYear: new FormControl(null, Validators.required),
      city: new FormControl('', Validators.required),
      description: new FormControl(null, [
        Validators.required,
        Validators.maxLength(350),
      ]),
      floors: new FormControl(null, Validators.required),
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
    const {state} = this.createForm.value;
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
    this.propertyService.createProperty(this.createForm.value).subscribe(res => {
      this.uxService.hideSpinner();
      this.uxService.showToast('Success', 'Property created successfully');
      this.router.navigate(['/']);
    }, (err) => {
      console.error(err);
      this.uxService.hideSpinner();
      this.uxService.handleError(err);
    });
  }
}
