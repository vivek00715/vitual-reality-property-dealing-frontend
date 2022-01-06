import {Component, ElementRef, Input, OnInit, ViewChild} from '@angular/core';
import {Router} from '@angular/router';
import {AuthService} from '../auth.service';
import {Property} from '../property-search.service';
import {PropertyService} from '../property.service';
import {UxService} from '../ux.service';
import {User, UserServiceService} from '../user-service.service';

@Component({
  selector: 'app-property-information-details',
  templateUrl: './property-information-details.component.html',
  styleUrls: ['./property-information-details.component.scss'],
})
export class PropertyInformationDetailsComponent implements OnInit {
  @Input() data!: Property;
  @ViewChild('closeModel') closeModel!: ElementRef;
  user: User | null = null;

  constructor(
    public authService: AuthService,
    private propertyService: PropertyService,
    private uxService: UxService,
    private router: Router,
    private userService: UserServiceService
  ) {
  }

  ngOnInit(): void {
  }

  fetchOwner(): void {
    if (!this.authService.loggedIn) {
      return;
    }
    this.uxService.showSpinner();
    this.userService.getUserById(this.getPropertyEmail()).subscribe(user => {
      this.user = user;
      this.uxService.hideSpinner();
      this.uxService.showToast('Success', 'User details are sent to your email');
    }, err => {
      this.uxService.handleError(err);
    });
  }

  getPropertyEmail() {
    return this.data.ownerEmail;
  }

  deleteProperty() {
    this.uxService.showSpinner();
    this.propertyService.deleteProperty(this.data.propertyId).subscribe(
      (response) => {
        this.uxService.hideSpinner();
        this.uxService.showToast('Success', 'Property deleted successfully');
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
