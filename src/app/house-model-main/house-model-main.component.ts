import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-house-model-main',
  templateUrl: './house-model-main.component.html',
  styleUrls: ['./house-model-main.component.scss']
})
export class HouseModelMainComponent implements OnInit {
  plotLength = 1800;
  plotBreadth = 900;
  screen = 0; // 0: take property details, 1: draw walls on map, 2: show 3D view
  vrData: number[][] = [];

  constructor() {
  }

  ngOnInit(): void {
  }

  handleVrData(map: number[][]) {
    this.screen = 1;
    this.vrData = map;

  }

}
