import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {Router} from '@angular/router';
import {Subscription} from 'rxjs';
import {AuthService} from '../auth.service';
import {UxService} from '../ux.service';
import {HttpClient} from '@angular/common/http';
import {BaseUrlService} from '../base-url.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  showLoginPage = true;
  authForm: FormGroup;

  showResetPassword = false;
  resetEmail = '';

  private authChangeSubscription: Subscription;

  constructor(
    public authService: AuthService,
    private router: Router,
    public uxService: UxService,
    private http: HttpClient,
    private baseUrlService: BaseUrlService
  ) {
    // listen to changes for auth state change, check for redirect if state changes
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
    if (!this.authForm.valid) {
      this.uxService.showToast('Error', 'Form is invalid. Please check the fields again');
      return;
    }
    const {email, password} = this.authForm.controls;
    this.authService.login(email.value, password.value);
  }

  isFormValid(): boolean {
    // return if the form is valid or invalid based on whether form is login form or signup form
    const {email, password} = this.authForm.controls;

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

  sendPasswordResetEmail(): void {
    const baseUrl = this.baseUrlService.getBaseUrl();
    this.uxService.showSpinner();
    this.http.get(`${baseUrl}/reset/${this.resetEmail}`, {
      responseType: 'text'
    }).subscribe((message) => {
      this.uxService.hideSpinner();
      this.uxService.showToast('Success', message);
      this.showResetPassword = false;
      this.resetEmail = '';
    }, (err) => {
      this.uxService.handleError(err);
    });
  }

  validateEmail(email: string): boolean {
    return (/^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/.test(email));
  }
}
