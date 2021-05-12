import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-create-property-timeline',
  templateUrl: './create-property-timeline.component.html',
  styleUrls: ['./create-property-timeline.component.scss']
})
export class CreatePropertyTimelineComponent implements OnInit {
  @Input() activeIndex = 0;
  events = [
    {status: 'Basic Details', index: 0},
    {status: 'Location Details', index: 1},
    {status: 'Photos', index: 2},
    {status: 'Pricing & Other Details', index: 3},
    {status: 'Review', index: 4}
  ];

  constructor() {
  }

  ngOnInit(): void {
  }
}
