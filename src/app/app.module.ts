import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PropertyInformationComponent } from './property-information/property-information.component';
import { PropertyInformationImagesComponent } from './property-information-images/property-information-images.component';
import { PropertyInformationVirtualViewComponent } from './property-information-virtual-view/property-information-virtual-view.component';
import { PropertyInformationStreetViewComponent } from './property-information-street-view/property-information-street-view.component';
import { PropertyInformationDetailsComponent } from './property-information-details/property-information-details.component';
import { PropertyInformationNearbyCardsComponent } from './property-information-nearby-cards/property-information-nearby-cards.component';

@NgModule({
  declarations: [
    AppComponent,
    PropertyInformationComponent,
    PropertyInformationImagesComponent,
    PropertyInformationVirtualViewComponent,
    PropertyInformationStreetViewComponent,
    PropertyInformationDetailsComponent,
    PropertyInformationNearbyCardsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
