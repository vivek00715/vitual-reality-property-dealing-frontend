import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-landing-info-card',
  templateUrl: './landing-info-card.component.html',
  styleUrls: ['./landing-info-card.component.scss']
})
export class LandingInfoCardComponent implements OnInit {
  constructor(public authService : AuthService) {

  }

  ngOnInit(): void {
  }

}
