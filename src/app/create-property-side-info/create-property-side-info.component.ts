import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-create-property-side-info',
  templateUrl: './create-property-side-info.component.html',
  styleUrls: ['./create-property-side-info.component.scss']
})
export class CreatePropertySideInfoComponent implements OnInit {
  @Input() page = 0;
  description: {img: string, text: string}[] = [];
  constructor() {
    this.description = [
      {img: 'assets/images/basicDetails.svg', text: 'Basic details helps the buyer easily filter out the properties. Enter the details carefully. Mismatched information may get your profile removed from our system.'},
      {img: 'assets/images/location.svg', text: 'Location is most important for a buyer. Ensure you enter correct details to get genuine buyers'},
      {img: 'assets/images/upload.svg', text: 'We recommend adding 4 or more photos. Try to capture the photos in landscape mode in clear light'},
      {img: 'assets/images/money.svg', text: 'Keep a reasonable price. Over priced properties get less response from buyers'},
      {img: 'assets/images/review.svg', text: 'Review the details before posting the final property. Use the back button to go back to any section.'},
    ];
  }

  ngOnInit(): void {

  }

}
