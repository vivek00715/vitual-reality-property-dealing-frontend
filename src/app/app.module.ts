import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LandingHeaderComponent } from './landing-header/landing-header.component';
import { LandingInfoCardComponent } from './landing-info-card/landing-info-card.component';
import { LandingFooterComponent } from './landing-footer/landing-footer.component';
import { LandingPageComponent } from './landing-page/landing-page.component';

@NgModule({
  declarations: [
    AppComponent,
    LandingHeaderComponent,
    LandingInfoCardComponent,
    LandingFooterComponent,
    LandingPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
