import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PropertySearchComponent } from './property-search/property-search.component';
import { PropertyInformationComponent } from './property-information/property-information.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { AuthPageComponent } from './auth-page/auth-page.component';

const routes: Routes = [
  { path: 'property/search/:address_id', component: PropertySearchComponent },
  { path: '', component: LandingPageComponent },
  { path: 'property/:id', component: PropertyInformationComponent },
  { path: 'auth', component: AuthPageComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
