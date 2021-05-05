import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
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
import { AuthPageComponent } from './auth-page/auth-page.component';
import { ReactiveFormsModule } from '@angular/forms';
import { NgxSpinnerModule } from 'ngx-spinner';
import { ToastrModule } from 'ngx-toastr';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CityDetailService } from './city-detail.service';
import { CreatePropertyComponent } from './create-property/create-property.component';
import { ErrorPageComponent } from './error-page/error-page.component';
import { NgxSliderModule } from '@angular-slider/ngx-slider';
import { MyPropertyComponent } from './my-property/my-property.component';
import { MyPropertyRentComponent } from './my-property-rent/my-property-rent.component';
import { MyPropertySellComponent } from './my-property-sell/my-property-sell.component';
import { EditPropertyDetailComponent } from './edit-property-detail/edit-property-detail.component';

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
    PropertyInformationNearbyCardsComponent,
    AuthPageComponent,
    CreatePropertyComponent,
    ErrorPageComponent,
    MyPropertyComponent,
    MyPropertyRentComponent,
    MyPropertySellComponent,
    EditPropertyDetailComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    NgxSpinnerModule,
    BrowserAnimationsModule,
    NgxSliderModule,
    ToastrModule.forRoot(),
  ],
  providers: [PropertySearchService, CityDetailService],
  bootstrap: [AppComponent],
  // for aframe custom html tags
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class AppModule {}
