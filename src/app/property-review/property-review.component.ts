import { Component, OnInit } from '@angular/core';
import {PropertyCreationDataService} from '../property-creation-data.service';

@Component({
  selector: 'app-property-review',
  templateUrl: './property-review.component.html',
  styleUrls: ['./property-review.component.scss']
})
export class PropertyReviewComponent implements OnInit {

  constructor(public propertyData: PropertyCreationDataService) { }

  ngOnInit(): void {
  }

}
