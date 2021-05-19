import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Property, PropertySearchService } from '../property-search.service';
import { UxService } from '../ux.service';

@Component({
  selector: 'app-property-information',
  templateUrl: './property-information.component.html',
  styleUrls: ['./property-information.component.scss'],
})
export class PropertyInformationComponent implements OnInit {

  currentView = 0;
  property!: Property;
  error = false;
  // 0: photos, 1: virtual 3d view, 2: street view
  constructor(
    private route: ActivatedRoute,
    private propertySearchService: PropertySearchService,
    private uxService: UxService,
    private router: Router
  ) {
    this.route.params.subscribe((params) => {
      const { id } = params;
      this.uxService.showSpinner();
      this.propertySearchService.getPropertyById(id).subscribe(
        (property) => {
          this.uxService.hideSpinner();
          this.property = property;
        },
        (err) => {
          uxService.handleError(err);
          this.router.navigate(['/']);
        }
      );
    });
  }
  activeIndex=1;
  setCurrentView(newView: number) {
    if (newView < 0 || newView > 2) {
      throw new Error('New view should be between 0 and 2');
    }
    this.currentView = newView;
    // set current view
  }

  ngOnInit(): void {}

  onBack() {
    this.router.navigate(['/property/', this.property?.state], {
      queryParams: {
        city: this.property?.city,
        state: this.property?.state,
        // type: this.searchForm.value.type,
        minPrice: 0,
        maxPrice: 100000000,
      },
    });
  }
}
