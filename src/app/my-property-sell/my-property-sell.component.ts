import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';
import { PropertyService } from '../property.service';
import { UxService } from '../ux.service';

@Component({
  selector: 'app-my-property-sell',
  templateUrl: './my-property-sell.component.html',
  styleUrls: ['./my-property-sell.component.scss'],
})
export class MyPropertySellComponent implements OnInit {
  propertyId = 0;
  list = [
    {
      propertyId: 0,
      address: '',
      city: '',
      state: '',
      pinCode: '',
      area: 0,
      bathrooms: '',
      bedrooms: '',
      bhk: 0,
      floors: 0,
      ownerEmail: '',
      price: 0,
      type: '',
      purpose: '',
      built_year: 0,
      description: '',
    },
  ];

  list_dummy = [
    {
      propertyId: 0,
      address: '',
      city: '',
      state: '',
      pinCode: '',
      area: 0,
      bathrooms: '',
      bedrooms: '',
      bhk: 0,
      floors: 0,
      ownerEmail: '',
      price: 0,
      type: '',
      purpose: '',
      built_year: 0,
      description: '',
    },
  ];

  constructor(
    private router: Router,
    public authService: AuthService,
    public uxService: UxService,
    public property: PropertyService
  ) {
    this.property
      .getUserProperty(this.authService.user?.email)
      .subscribe((response: any) => {
        this.list = response;
        // this.list_copy = this.list;
        this.deleteAll(this.list_dummy);
        for (let i = 0; i < this.list.length; i++) {
          if (this.list[i].purpose == 'Sell') {
            this.list_dummy.push(this.list[i]);
          }
        }
        this.list = this.list_dummy;
        // this.list_copy = this.list;
        console.log(this.list);
        console.log(this.list.length);
      });
  }

  ngOnInit(): void {}

  showProperty(index: number) {
    this.propertyId = this.list[index]['propertyId'];
    this.router.navigate(['/property/id', this.propertyId], {
      queryParams: { id: this.propertyId },
    });
  }

  deleteAll(list: any) {
    list.length = 0;
  }
}
