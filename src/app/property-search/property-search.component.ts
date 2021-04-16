import { Component, Input, OnInit } from '@angular/core';
import {Pipe, PipeTransform} from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

@Pipe({name: 'safe'})
export class SafePipe implements PipeTransform {
  constructor(private sanitizer: DomSanitizer) { }
  transform(url:string) {
   return this.sanitizer.bypassSecurityTrustResourceUrl(url);
    }
}

export interface CityData {
  street:string;
  city: string;
  state:string;
  description: string;
  propertyType:string;

}

@Component({
  selector: 'app-property-search',
  templateUrl: './property-search.component.html',
  styleUrls: ['./property-search.component.scss']
})
export class PropertySearchComponent implements OnInit {

  @Input() data: CityData = {
    street:'35 BN PAC',
    city: 'Lucknow',
    state: 'UP',
    description:"Welcome to Lucknow , City of Nawabs. Muskuraaiye Aap Lucknow me hai",
    propertyType: 'Residentials, Office'
  };

  src="https://www.google.com/maps/embed/v1/place?key=AIzaSyD2TLiALPifHWu9QDw25D1cLsSYTYrOaUk&q="+this.data.street+this.data.city+this.data.state;

  list=[{'street':this.data.street,'owner':'Mr David','bedroooms':'3','city':this.data.city
         ,'bathrooms':'2','area':'2750','year':'2004','price':'560000'},
        {},{},{},{}]

  constructor() {

  }

  ngOnInit(): void {
  }

}
