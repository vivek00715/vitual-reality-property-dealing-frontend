import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-property-information-nearby-cards',
  templateUrl: './property-information-nearby-cards.component.html',
  styleUrls: ['./property-information-nearby-cards.component.scss']
})
export class PropertyInformationNearbyCardsComponent implements OnInit {
  @Input() price = 10000;
  @Input() beds = 3;
  @Input() baths = 2;
  @Input() address = '';
  @Input() area = 1000;
  constructor() { }

  ngOnInit(): void {
  }

}
