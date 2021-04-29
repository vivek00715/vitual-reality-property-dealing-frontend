import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
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
  headerOpen = false;
  showLoginPage = true; // if true, shows login page, else signup page
  authForm: FormGroup;
  private authChangeSubscription: Subscription;
  constructor(
    public authService: AuthService,
    private router: Router,
    public uxService: UxService
  ) {
    // listen to changes for auth state change, check for redirect if state changes
    this.authChangeSubscription = this.authService.authStateChanged.subscribe(
      () => {
        this.redirectIfLoggedIn();
      }
    );

    this.authForm = new FormGroup({
      email: new FormControl(null, [Validators.email, Validators.required]),
      password: new FormControl(null, [
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

  toggleForm() {
    // toggles between login page and signup page
    this.showLoginPage = !this.showLoginPage;
  }

  private redirectIfLoggedIn(): void {
    // automatically redirect to / if user is logged in
    if (this.authService.loggedIn) {
      this.router.navigate(['/']);
    }
  }
  ngOnInit(): void {
    // check if user is logged in
    this.redirectIfLoggedIn();
  }

  ngOnDestroy(): void {
    // prevent memory leaks
    this.authChangeSubscription.unsubscribe();
  }

  handleAuth() {
    const { email, password, mobile, address, name } = this.authForm.controls;
    if (this.showLoginPage) {
      // do login
      this.authService.login(email.value, password.value);
    } else {
      this.authService.signup(
        email.value,
        password.value,
        name.value,
        address.value,
        mobile.value
      );
    }
  }

  isFormValid(): boolean {
    // return if the form is valid or invalid based on whether form is login form or signup form
    const { email, password } = this.authForm.controls;
    if (this.showLoginPage) {
      // only email and password should be valid
      return email.valid && password.valid;
    }
    // everything should be valid if it is signup form
    return this.authForm.valid;
  }
}
