import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Inject, NgZone } from '@angular/core';


@Component({
  selector: 'app-property-information-virtual-view',
  templateUrl: './property-information-virtual-view.component.html',
  styleUrls: ['./property-information-virtual-view.component.scss']
})

export class PropertyInformationVirtualViewComponent implements OnInit {


  // src="https://tour-ap.metareal.com/apps/player?asset=ee0bdaf0-8562-4c4d-9695-ee8040e01b3f";
  src="https://tour-ap.metareal.com/apps/player?asset=64c72e3a-ec4e-4482-a397-216983b62560";

  constructor()
  {

  }

  ngOnInit(): void {
    // console.log(loadImage(this.kitchen.nativeElement.getAttribute('src')))

  }


}
