import {Component, ElementRef, Input, OnInit, ViewChild} from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Inject, NgZone } from '@angular/core';
import { PropertyService } from '../property.service';
import { Property, PropertySearchService } from '../property-search.service';


@Component({
  selector: 'app-property-information-virtual-view',
  templateUrl: './property-information-virtual-view.component.html',
  styleUrls: ['./property-information-virtual-view.component.scss']
})

export class PropertyInformationVirtualViewComponent implements OnInit {


  // src="https://tour-ap.metareal.com/apps/player?asset=ee0bdaf0-8562-4c4d-9695-ee8040e01b3f";
  @Input('virtualTourUrl') src = '';


  ngOnInit(): void {


  }

  getProperty()
  {

  }


}
