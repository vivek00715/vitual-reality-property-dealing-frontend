import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { PropertySearchService, PropertyShort } from '../property-search.service';

@Component({
  selector: 'app-admin-card',
  templateUrl: './admin-card.component.html',
  styleUrls: ['./admin-card.component.scss']
})
export class AdminCardComponent implements OnInit {

  propertyService:PropertySearchService;
  displayModal: boolean = false;
  list:PropertyShort[]=[];
  currentPage = 1;
  totalResults = 0;
  id:number=0;
  virtualTourURL:FormGroup;

  constructor(propertyService:PropertySearchService ,private router:Router) {

    this.propertyService=propertyService;
    this.getProperty();

    this.virtualTourURL = new FormGroup({
      url:new FormControl(''),
    });


  }

  ngOnInit(): void {

  }

  getProperty(page=1)
  {
    this.propertyService.getPropertyHavinVirtualTour().subscribe((response)=>{
       this.list=response.data;
       this.currentPage = response.currentPage;
       this.totalResults = response.totalResults;
    });
  }

  paginate(event: any) {
    this.getProperty(event.page + 1);
  }

  setVirtualTourURL(index:number){

    let id=this.list[index].propertyId;
    this.id=id;
    this.displayModal=true;

  }

  onSubmit() {

    let virtualTourURL:string=this.virtualTourURL.value.url;
    this.propertyService.setPropertyVirtualTourURL(this.id,virtualTourURL);
    this.displayModal=false;
    this.router.navigate(['/property/id',this.id], {queryParams: {id: this.id}});

  }



}
