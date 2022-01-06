import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PropertySearchComponent } from './property-search/property-search.component';
import { PropertyInformationComponent } from './property-information/property-information.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { AuthPageComponent } from './auth-page/auth-page.component';
import { CreatePropertyComponent } from './create-property/create-property.component';
import { ErrorPageComponent } from './error-page/error-page.component';
import { HouseModelMainComponent } from './house-model-main/house-model-main.component';
import { MyPropertyComponent } from './my-property/my-property.component';
import { EditPropertyDetailComponent } from './edit-property-detail/edit-property-detail.component';
import { PropertyCreateStepsComponent } from './property-create-steps/property-create-steps.component';
import { AuthRequiredGuard } from './auth-required.guard';
import { AuthNotRequiredGuard } from './auth-not-required.guard';
import { LoginComponent } from './login/login.component';
import { AdminComponent } from './admin/admin.component';
import { EmailVerifyComponent } from './email-verify/email-verify.component';
import { PasswordResetComponent } from './password-reset/password-reset.component';
import { AdminRequiredGuard } from './admin-required.guard';

const routes: Routes = [
  { path: 'property/:address', component: PropertySearchComponent },
  { path: '', component: LandingPageComponent },
  { path: 'property/id/:id', component: PropertyInformationComponent },
  {
    path: 'auth',
    component: AuthPageComponent,
    canActivate: [AuthNotRequiredGuard],
  },
  {
    path: 'create',
    component: CreatePropertyComponent,
    canActivate: [AuthRequiredGuard],
  },
  { path: 'model', component: HouseModelMainComponent },
  {
    path: 'my-profile',
    component: MyPropertyComponent,
    canActivate: [AuthRequiredGuard],
  },
  {
    path: 'property/edit/:id',
    component: EditPropertyDetailComponent,
    canActivate: [AuthRequiredGuard],
  },
  {
    path: 'create/property',
    component: PropertyCreateStepsComponent,
    canActivate: [AuthRequiredGuard],
  },
  { path: 'signup', component: AuthPageComponent },
  { path: 'create', component: CreatePropertyComponent },
  { path: 'model', component: HouseModelMainComponent },
  { path: 'my-profile', component: MyPropertyComponent },
  { path: 'property/edit/:id', component: EditPropertyDetailComponent },
  { path: 'log-in', component: LoginComponent },
  { path: 'admin', component: AdminComponent ,canActivate: [AdminRequiredGuard]},
  { path: 'verify/:token', component: EmailVerifyComponent },
  { path: 'reset/:token', component: PasswordResetComponent },
  { path: '**', component: ErrorPageComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
