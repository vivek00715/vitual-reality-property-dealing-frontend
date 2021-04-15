import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PropertyInformationComponent } from './property-information/property-information.component';
import { LandingPageComponent } from './landing-page/landing-page.component';

const routes: Routes = [
  {path: "",component : LandingPageComponent},
  { path: 'property/:id', component: PropertyInformationComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
