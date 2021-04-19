import { Component, Input, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-property-search-header',
  templateUrl: './property-search-header.component.html',
  styleUrls: ['./property-search-header.component.scss']
})

export class PropertySearchHeaderComponent implements OnInit {

  constructor(public authService: AuthService) { }

  ngOnInit(): void {
  }

}
