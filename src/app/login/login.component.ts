import { Component, OnInit } from '@angular/core';
import { FormBuilder,FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { AuthService } from '../auth.service';
import { UxService } from '../ux.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  showLoginPage = true;
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
      email: new FormControl(null,[
        Validators.email,
        Validators.required
      ]),
      password: new FormControl(null, [
        Validators.minLength(6),
        Validators.required,
      ])
    });
  }

  ngOnDestroy(): void {
    // prevent memory leaks
    this.authChangeSubscription.unsubscribe();
  }

  handleAuth() {
    const { email, password, mobile, address, name } = this.authForm.controls;
      this.authService.login(email.value, password.value);
  }

  isFormValid(): boolean {
    // return if the form is valid or invalid based on whether form is login form or signup form
    const { email, password } = this.authForm.controls;

      // only email and password should be valid
      return email.valid && password.valid;
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

}
