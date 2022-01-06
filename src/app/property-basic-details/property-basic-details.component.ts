import { Component, OnInit } from '@angular/core';
import {PropertyCreationDataService} from '../property-creation-data.service';

@Component({
  selector: 'app-property-basic-details',
  templateUrl: './property-basic-details.component.html',
  styleUrls: ['./property-basic-details.component.scss']
})
export class PropertyBasicDetailsComponent implements OnInit {

  constructor(public propertyData: PropertyCreationDataService) { }

  ngOnInit(): void {
  }

  handleBhkChange(): void {
    if (this.propertyData.bedrooms > this.propertyData.bhk) {
      this.propertyData.bedrooms = this.propertyData.bhk;
    }
  }

  getCurrentYear(): number {
    return new Date().getFullYear();
  }

}
