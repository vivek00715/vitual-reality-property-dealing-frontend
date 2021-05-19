import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-landing-header',
  templateUrl: './landing-header.component.html',
  styleUrls: ['./landing-header.component.scss'],
})

export class LandingHeaderComponent implements OnInit {
  hamburger = false;
  for: string = '';
  buy: string = 'Buy';
  state: string = 'Delhi';
  rent: string = 'Rent';

  constructor(public authService: AuthService, private router: Router) {
    if (screen.width <= 750) {
      this.hamburger = true;
    } else {
      this.hamburger = false;
    }
  }

  ngOnInit() {}

  Rent() {
    this.router.navigate(['/property/', this.state], {
      queryParams: {
        for: this.rent,
        state: this.state,
      },
    });
  }

  Buy() {
    this.router.navigate(['/property/', this.state], {
      queryParams: {
        for: this.buy,
        state: this.state,
      },
    });
  }

  Sell() {
    this.router.navigate(['/create']);
  }
}
