import {Component, OnInit} from '@angular/core';
import {PropertyCreationDataService} from '../property-creation-data.service';

@Component({
  selector: 'app-property-create-steps',
  templateUrl: './property-create-steps.component.html',
  styleUrls: ['./property-create-steps.component.scss']
})
export class PropertyCreateStepsComponent implements OnInit {
  currentPage = 0;
  maxPages: number;
  title = [
    'Fill out these basic details',
    'Where is your property located?',
    'Add photos of your property',
    'Price Details',
    'Review your property'
  ];


  constructor(public propertyData: PropertyCreationDataService) {
    this.maxPages = this.title.length - 1;
  }

  ngOnInit(): void {
  }

  incrementPage(): void {
    if(this.currentPage === this.maxPages) {
      // create new Property
      this.propertyData.createProperty();
    }
    this.currentPage = Math.min(this.currentPage + 1, this.maxPages);
  }


}
