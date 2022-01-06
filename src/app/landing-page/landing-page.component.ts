import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.scss'],
})
export class LandingPageComponent implements OnInit {
  state: string = 'Delhi';

  constructor(private router: Router) {}

  ngOnInit(): void {}

  search() {
    this.router.navigate(['/property/', this.state], {
      queryParams: {
        state: this.state,
        for: 'All',
        type: null,
        city: null,
        minPrice: null,
        maxPrice: null,
      },
    });
  }
}
