import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-landing-header',
  templateUrl: './landing-header.component.html',
  styleUrls: ['./landing-header.component.scss']
})
export class LandingHeaderComponent implements OnInit {

  headerOpen = false;

  images: string[] = ["/assets/images/header-background4.jpg" , "/assets/images/header-background2.jpg", "/assets/images/header-background3.jpg", "/assets/images/header-background7.jpg", "/assets/images/header-background5.jpg", "/assets/images/header-background6.jpg"];
  changeBackgroundCounter = 0;
  storedInterval: any;
  constructor(public authService: AuthService) {
    this.storedInterval = setInterval(() => {
      this.changeBackgroundCounter = this.changeBackgroundCounter + 1;
      if (this.changeBackgroundCounter > this.images.length - 1) {
        this.changeBackgroundCounter = 0;
      }
    }, 5000);
  }

  getImage() {

    return this.images[this.changeBackgroundCounter];
  }
  ngOnInit() {
  }

  ngOnDestroy(){
    clearInterval(this.storedInterval);
  }

}
