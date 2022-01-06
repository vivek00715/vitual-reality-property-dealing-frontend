import { Component, OnInit } from '@angular/core';
import {PropertyCreationDataService} from '../property-creation-data.service';

@Component({
  selector: 'app-property-create-information',
  templateUrl: './property-create-information.component.html',
  styleUrls: ['./property-create-information.component.scss']
})
export class PropertyCreateInformationComponent implements OnInit {

  constructor(public propertyData: PropertyCreationDataService) { }

  ngOnInit(): void {
  }

  handleBhkChange(): void {
    if (this.propertyData.bedrooms > this.propertyData.bhk) {
      this.propertyData.bedrooms = this.propertyData.bhk;
    }
  }

}
