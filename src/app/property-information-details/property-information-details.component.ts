import { Component, Input, OnInit } from '@angular/core';
import { Property } from '../property-search.service';

@Component({
  selector: 'app-property-information-details',
  templateUrl: './property-information-details.component.html',
  styleUrls: ['./property-information-details.component.scss'],
})
export class PropertyInformationDetailsComponent implements OnInit {
  @Input() data!: Property;
  constructor() {}

  ngOnInit(): void {}
}
