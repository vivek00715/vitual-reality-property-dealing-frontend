import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';
import { PropertyShort } from '../property-search.service';
import { PropertyService } from '../property.service';
import { UxService } from '../ux.service';

@Component({
  selector: 'app-my-property-rent',
  templateUrl: './my-property-rent.component.html',
  styleUrls: ['./my-property-rent.component.scss'],
})
export class MyPropertyRentComponent implements OnInit {
  propertyId = 0;
  list: PropertyShort[] = [];

  list_dummy: PropertyShort[] = [];
  totalResults = 0;

  // list_copy = this.list;
  constructor(
    private router: Router,
    public authService: AuthService,
    public uxService: UxService,
    public property: PropertyService
  ) {
    this.getProperty();
  }

  getProperty(page = 1) {
    this.property
      .getUserProperty(this.authService.user?.email)
      .subscribe((response: any) => {
        this.list = response.data;
        // for (let i = 0; i < 10; i++) {
        //   this.list = [...this.list, ...response.data];
        // }
        this.totalResults = response.totalResults;
        // this.list_copy = this.list;
        this.deleteAll(this.list_dummy);
        for (let i = 0; i < this.list.length; i++) {
          if (this.list[i].purpose == 'Rent') {
            this.list_dummy.push(this.list[i]);
          }
        }
        this.list = this.list_dummy;
        // this.list_copy = this.list;
        console.log(this.list);
        console.log(this.list.length);
      });
  }

  ngOnInit(): void {}

  showProperty(index: number) {
    this.propertyId = this.list[index]['propertyId'];
    this.router.navigate(['/property/id', this.propertyId], {
      queryParams: { id: this.propertyId },
    });
  }

  deleteAll(list: any) {
    list.length = 0;
  }

  paginate(event: any) {
    this.getProperty(event.page + 1);
  }
}
