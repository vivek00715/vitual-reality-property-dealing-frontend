import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';
import { Property } from '../property-search.service';
import { PropertyService } from '../property.service';
import { UxService } from '../ux.service';
import { ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-property-information-details',
  templateUrl: './property-information-details.component.html',
  styleUrls: ['./property-information-details.component.scss'],
})
export class PropertyInformationDetailsComponent implements OnInit {
  @Input() data!: Property;
  @ViewChild('closeModel') closeModel!: ElementRef;
  constructor(
    public authService: AuthService,
    private propertyService: PropertyService,
    private uxService: UxService,
    private router: Router
  ) {}

  ngOnInit(): void {}

  getPropertyEmail() {
    return this.data.ownerEmail;
  }

  deleteProperty() {
    this.uxService.showSpinner();
    console.log(this.data.propertyId);
    this.propertyService.deleteProperty(this.data.propertyId).subscribe(
      (response) => {
        this.uxService.hideSpinner();
        this.uxService.showToast('Success', 'Property deleted successfully');
        console.log(response);
        this.closeModel.nativeElement.click();
        this.router.navigate(['/my-profile']);
      },
      (err) => {
        console.error(err);
        this.uxService.hideSpinner();
        this.uxService.handleError(err);
      }
    );
  }
}
