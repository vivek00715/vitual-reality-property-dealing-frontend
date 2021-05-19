import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {HttpClient} from '@angular/common/http';
import {UxService} from '../ux.service';
import {BaseUrlService} from '../base-url.service';

@Component({
  selector: 'app-email-verify',
  templateUrl: './email-verify.component.html',
  styleUrls: ['./email-verify.component.scss']
})
export class EmailVerifyComponent implements OnInit {
  token = '';

  constructor(
    private route: ActivatedRoute,
    private http: HttpClient,
    private uxService: UxService,
    private baseUrlService: BaseUrlService,
    private router: Router
  ) {
    route.params.subscribe(params => {
      this.token = params.token;
      this.verifyToken();
    });
  }

  verifyToken(): void {
    const baseUrl = this.baseUrlService.getBaseUrl();
    this.http.get(`${baseUrl}/verify/${this.token}`, {
      responseType: 'text'
    }).subscribe((res) => {
      this.uxService.showToast('Email Verified', 'Email was verified successfully');
      this.router.navigate(['/']);
    }, (err) => {
      this.uxService.handleError(err);
      this.router.navigate(['/']);
    });
  }

  ngOnInit(): void {
  }

}
