import { Component, OnInit } from '@angular/core';
import {StateCityService} from '../state-city.service';
import {PropertyCreationDataService} from '../property-creation-data.service';

@Component({
  selector: 'app-property-location-details',
  templateUrl: './property-location-details.component.html',
  styleUrls: ['./property-location-details.component.scss']
})
export class PropertyLocationDetailsComponent implements OnInit {

  filteredStates: string[] = [];
  filteredCities: string[] = [];

  constructor(public stateCityService: StateCityService, public propertyData: PropertyCreationDataService) {
    this.filteredStates = stateCityService.getStates();
  }

  ngOnInit(): void {
  }

  filterState(event: any): void {
    this.filteredStates = this.stateCityService.getStates().filter(state => state.toLowerCase().includes(event.query.toLowerCase()));
    this.propertyData.city = '';
  }

  filterCity(event: any): void {
    this.filteredCities = this.stateCityService
      .getCities(this.propertyData.state)
      .filter(state => state.toLowerCase().includes(event.query.toLowerCase()));
  }

  isStateValid(): boolean {
    return this.stateCityService.getStates().includes(this.propertyData.state);
  }
}
