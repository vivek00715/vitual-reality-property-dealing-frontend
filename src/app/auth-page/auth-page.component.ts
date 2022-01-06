import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { AuthService } from '../auth.service';
import { UxService } from '../ux.service';

@Component({
  selector: 'app-auth-page',
  templateUrl: './auth-page.component.html',
  styleUrls: ['./auth-page.component.scss'],
})
export class AuthPageComponent implements OnInit {
  authForm: FormGroup;
  private authChangeSubscription: Subscription;
  constructor(
    private fb:FormBuilder,
    private router:Router,
    public authService: AuthService,
    public uxService: UxService
  ){
    this.authChangeSubscription = this.authService.authStateChanged.subscribe(
      () => {
        this.redirectIfLoggedIn();
      }
    );

    this.authForm = new FormGroup({
      email: new FormControl(null, [
        Validators.email,
        Validators.required
      ]),
      password1: new FormControl(null, [
        Validators.minLength(6),
        Validators.required,
      ]),
      password2: new FormControl(null, [
        Validators.minLength(6),
        Validators.required,
      ]),
      mobile: new FormControl(null, [
        Validators.required,
        Validators.maxLength(10),
        Validators.minLength(10),
      ]),
      address: new FormControl(null, [
        Validators.required,
        Validators.minLength(10),
      ]),
      name: new FormControl(null, [
        Validators.required,
        Validators.minLength(3),
      ]),
    });

  }
  private redirectIfLoggedIn(): void {
    // automatically redirect to / if user is logged in
    if (this.authService.loggedIn) {
      this.router.navigate(['/']);
    }
  }
  ngOnInit():void{
    this.redirectIfLoggedIn();
  }

  handleAuth() {
    const { email, password1,password2, mobile, address, name } = this.authForm.controls;
    if(password1.value===password2.value){
    this.authService.signup(
      email.value,
      password2.value,
      name.value,
      address.value,
      mobile.value
    );
    }else{
      this.uxService.showToast("Error","Passwords do not match",true)
    }
  }
  ngOnDestroy(): void {
    // prevent memory leaks
    this.authChangeSubscription.unsubscribe();
  }

  isFormValid(): boolean {
    // return if the form is valid or invalid based on whether form is login form or signup form
    const { email, password2 } = this.authForm.controls;
    // everything should be valid if it is signup form
    return this.authForm.valid;
  }

  login(){
    this.router.navigate(['/log-in']);
  }
}
