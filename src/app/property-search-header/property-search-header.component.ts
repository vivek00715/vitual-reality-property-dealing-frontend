import { Component, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { PropertySearchService } from '../property-search.service';

@Component({
  selector: 'app-property-search-header',
  templateUrl: './property-search-header.component.html',
  styleUrls: ['./property-search-header.component.scss']
})

export class PropertySearchHeaderComponent implements OnInit {

  hamburger=false;
  propertyService:PropertySearchService;
  searchProperty=new FormGroup({

  });

  constructor(propertyService:PropertySearchService, private router:Router, private activatedRoute:ActivatedRoute){
     this.propertyService=propertyService;

     this.activatedRoute.queryParamMap.subscribe((query:any)=>{
        console.log(query);
     })

  }

  currentUrl=this.router.url;

  ngOnInit(): void {

    this.searchProperty=new FormGroup({
      'street':new FormControl(null),
      'city':new FormControl(null),
      'state':new FormControl(null,Validators.required),
      'type':new FormControl(null),
      'budget':new FormControl(null)
    })

  }

  SearchProperty()
  {
     const data=this.searchProperty.value;
     console.log(data.city);
     this.router.routeReuseStrategy.shouldReuseRoute = () => false;
     this.router.onSameUrlNavigation = 'reload';
     this.router.navigate([this.currentUrl]);
     this.router.navigate(['/property/search/',data.state],{ queryParams: {street:data.street, city:data.city, state:data.state, type:data.type, budget:data.budget}});
 }

}


