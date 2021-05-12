import { Component, OnInit } from '@angular/core';
import {PropertyCreationDataService} from '../property-creation-data.service';

@Component({
  selector: 'app-property-pricing',
  templateUrl: './property-pricing.component.html',
  styleUrls: ['./property-pricing.component.scss']
})
export class PropertyPricingComponent implements OnInit {

  constructor(public propertyData: PropertyCreationDataService) { }

  ngOnInit(): void {
  }

}
