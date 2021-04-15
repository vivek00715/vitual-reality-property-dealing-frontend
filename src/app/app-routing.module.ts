import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PropertySearchComponent } from './property-search/property-search.component';


const routes: Routes = [
  {path:'property/search/:address_id',component:PropertySearchComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
