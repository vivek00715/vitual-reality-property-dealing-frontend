import { Component, OnInit } from '@angular/core';

export interface Testimonial {
  name: string;
  designation: string;
  content: string;
}

@Component({
  selector: 'app-create-property',
  templateUrl: './create-property.component.html',
  styleUrls: ['./create-property.component.scss'],
})
export class CreatePropertyComponent implements OnInit {
  headerOpen = false;
  test: Testimonial[] = [
    {
      name: 'Harshit Pal',
      designation: 'Owner, New Delhi',
      content:
        'Several options are available in terms of locations, property type and price. It would be great if HashHomes provides more preferences in tier II cities also.',
    },
    {
      name: 'Vivek Shukla',
      designation: 'Owner, Chennai',
      content:
        'Creativity combined with excellent technical capabilities, I am thankful to HashHomes.com for its services',
    },
    {
      name: 'Yash Agrawal',
      designation: 'Dealer, Mumbai',
      content:
        'Prompt response and offered constant assistance after posting my ad on the website',
    },
    {
      name: 'Hitesh Dullu',
      designation: 'Dealer, Mumbai',
      content:
        'Thanks to HashHomes.com for its exclusive services and prompt assistance to help me post my rental property advertisement.',
    },
  ];

  constructor() {}

  ngOnInit(): void {
  }
}
