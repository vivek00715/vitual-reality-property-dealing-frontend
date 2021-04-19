import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PropertySearchHeaderComponent } from './property-search-header/property-search-header.component';
import { PropertySearchComponent } from './property-search/property-search.component';
import { SafePipe } from './safe.pipe';
import { LandingHeaderComponent } from './landing-header/landing-header.component';
import { LandingInfoCardComponent } from './landing-info-card/landing-info-card.component';
import { LandingFooterComponent } from './landing-footer/landing-footer.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { PropertyInformationComponent } from './property-information/property-information.component';
import { PropertyInformationImagesComponent } from './property-information-images/property-information-images.component';
import { PropertyInformationVirtualViewComponent } from './property-information-virtual-view/property-information-virtual-view.component';
import { PropertyInformationStreetViewComponent } from './property-information-street-view/property-information-street-view.component';
import { PropertyInformationDetailsComponent } from './property-information-details/property-information-details.component';
import { PropertyInformationNearbyCardsComponent } from './property-information-nearby-cards/property-information-nearby-cards.component';
import { HttpClientModule } from '@angular/common/http';
import { PropertySearchService } from './property-search.service';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    PropertySearchComponent,
    PropertySearchHeaderComponent,
    SafePipe,
    LandingHeaderComponent,
    LandingInfoCardComponent,
    LandingFooterComponent,
    LandingPageComponent,
    PropertyInformationComponent,
    PropertyInformationImagesComponent,
    PropertyInformationVirtualViewComponent,
    PropertyInformationStreetViewComponent,
    PropertyInformationDetailsComponent,
    PropertyInformationNearbyCardsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [PropertySearchService],
  bootstrap: [AppComponent]
})
export class AppModule { }
