import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PropertyInformationComponent } from './property-information/property-information.component';

const routes: Routes = [
  { path: 'property/:id', component: PropertyInformationComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
