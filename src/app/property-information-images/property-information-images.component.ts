import { Component, OnInit,Input } from '@angular/core';

@Component({
  selector: 'app-property-information-images',
  templateUrl: './property-information-images.component.html',
  styleUrls: ['./property-information-images.component.scss']
})
export class PropertyInformationImagesComponent implements OnInit {
  @Input() images:any []=[];
  error = false;
  responsiveOptions:any[] = [
      {
          breakpoint: '1024px',
          numVisible: 5
      },
      {
          breakpoint: '960px',
          numVisible: 4
      },
      {
          breakpoint: '768px',
          numVisible: 3
      },
      {
          breakpoint: '560px',
          numVisible: 1
      }
  ];

  constructor() {

  }

  ngOnInit(): void {

  }

}
