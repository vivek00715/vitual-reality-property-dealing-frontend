import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {HttpClient} from '@angular/common/http';
import {UxService} from '../ux.service';
import {BaseUrlService} from '../base-url.service';

@Component({
  selector: 'app-password-reset',
  templateUrl: './password-reset.component.html',
  styleUrls: ['./password-reset.component.scss']
})
export class PasswordResetComponent implements OnInit {
  token = '';
  password = '';
  confirmPassword = '';

  constructor(
    private activatedRoute: ActivatedRoute,
    private http: HttpClient,
    private ux: UxService,
    private baseUrlService: BaseUrlService,
    private router: Router
  ) {
    this.activatedRoute.params.subscribe(params => {
      this.token = params.token;
    });
  }

  ngOnInit(): void {
  }

  resetPassword(): void {
    if (this.password !== this.confirmPassword) {
      this.ux.showToast('Error', 'The passwords do not match');
      return;
    }
    this.ux.showSpinner();
    const baseUrl = this.baseUrlService.getBaseUrl();
    this.http.post(`${baseUrl}/reset`, {
      token: this.token,
      password: this.password
    }, {
      responseType: 'text'
    }).subscribe(text => {
      this.ux.hideSpinner();
      this.ux.showToast('Success', text);
      this.router.navigate(['/log-in']);
    }, err => {
      this.ux.handleError(err);
    });
  }
}
