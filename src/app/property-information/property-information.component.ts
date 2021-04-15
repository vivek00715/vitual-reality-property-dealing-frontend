import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-property-information',
  templateUrl: './property-information.component.html',
  styleUrls: ['./property-information.component.scss'],
})
export class PropertyInformationComponent implements OnInit {
  currentView = 0;
  // 0: photos, 1: virtual 3d view, 2: street view
  constructor() {}

  setCurrentView(newView: number) {
    this.currentView = newView;
    // set current view
  }

  ngOnInit(): void {}
}
