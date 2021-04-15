import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PropertySearchHeaderComponent } from './property-search-header/property-search-header.component';
import { PropertySearchComponent } from './property-search/property-search.component';
import { SafePipe } from './safe.pipe';

@NgModule({
  declarations: [
    AppComponent,
    PropertySearchComponent,
    PropertySearchHeaderComponent,
    SafePipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
