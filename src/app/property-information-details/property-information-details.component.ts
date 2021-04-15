import { Component, Input, OnInit } from '@angular/core';

export interface PropertyData {
  street: string;
  city: string;
  state: string;
  pincode: number;
  price: number;
  beds: number;
  baths: number;
  area: number;
  description: string;
  listedBy: string;
  status: string;
  propertyType: string;
  yearBuilt: number;
  community: string;
  style: string;
  lotSize: number;
}

@Component({
  selector: 'app-property-information-details',
  templateUrl: './property-information-details.component.html',
  styleUrls: ['./property-information-details.component.scss'],
})
export class PropertyInformationDetailsComponent implements OnInit {
  @Input() data: PropertyData = {
    street: '2928 Hampton Bluff St',
    city: 'Las Vegas',
    state: 'NV',
    pincode: 89117,
    price: 515000,
    beds: 4,
    baths: 3,
    area: 2730,
    description:
      "Welcome to the highly sought-after Lakes community where you'll enjoy pictureque water features, mature greenbelts & parks. This home features gorgeous brick accents, designer paint scheme and luxury vinyl wood floors! From the moment you enter, the soaring, architecturally home will leave you in an awe.",
    listedBy: 'Cheryl Van Elsis',
    status: 'Active',
    propertyType: 'Residential, Single Family Residence',
    yearBuilt: 1989,
    community: 'Lakes West #3 Lewis Homes',
    lotSize: 6970,
    style: 'Two Story',
  };
  constructor() {}

  ngOnInit(): void {}
}
