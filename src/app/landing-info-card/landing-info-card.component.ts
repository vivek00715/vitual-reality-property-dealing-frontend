import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-landing-info-card',
  templateUrl: './landing-info-card.component.html',
  styleUrls: ['./landing-info-card.component.scss']
})
export class LandingInfoCardComponent implements OnInit {


  for:string="";
  Buy:string="Buy"
  state:string="Delhi";
  Rent:string="Rent";

  constructor(public authService : AuthService, private router:Router) {


  }

  ngOnInit(): void {

  }

  buy()
  {
    this.router.navigate(['/property/',this.state],{
      queryParams: {
        for:this.Buy,
        state:this.state
      }
    });
  }

  sell()
  {
    this.router.navigate(['/create']);
  }

  design()
  {
    this.router.navigate(['/model/']);
  }

}
