import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-landing-header',
  templateUrl: './landing-header.component.html',
  styleUrls: ['./landing-header.component.scss']
})
export class LandingHeaderComponent implements OnInit {

  headerOpen = false;
  searchForm = new FormGroup({});
  images: string[] = ["/assets/images/header-background4.jpg" , "/assets/images/header-background2.jpg", "/assets/images/header-background3.jpg", "/assets/images/header-background7.jpg", "/assets/images/header-background5.jpg", "/assets/images/header-background6.jpg"];
  changeBackgroundCounter = 0;
  storedInterval: any;


  constructor(private router : Router) {
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

  ngOnInit() :void{
    this.searchForm = new FormGroup({
      'city' : new FormControl(null),
      'propertytype' : new FormControl(null),
      'budget' : new FormControl(null),
    });
  }

  ngOnDestroy(){
    clearInterval(this.storedInterval);
  }

  onSubmit(){

    console.log(this.searchForm.value.city , this.searchForm.value.propertytype , this.searchForm.value.budget);
    let cityname = this.searchForm.value.city;
   //redirecting to issues page after submitting the form
    this.router.navigate(['/property/search/',cityname],{ queryParams: {propertytype: this.searchForm.value.propertytype, budget: this.searchForm.value.budget}});
 }

}
