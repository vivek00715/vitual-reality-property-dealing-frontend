import {Injectable} from '@angular/core';
import {StateCityService} from './state-city.service';
import {PropertyRequestBody, PropertyService} from './property.service';
import {Router} from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class PropertyCreationDataService {
  purpose = 'Sell';
  type = 'Home';
  state = '';
  city = '';
  pinCode = '';
  address = '';
  bedrooms = 1;
  bathrooms = 1;
  area = 1;
  floors = 1;
  bhk = 1;
  images: File[] = [];
  price = 1000;
  description = '';
  year = 1990;

  creatingProperty = false;
  uploadingPhoto = false;
  propertyId = 0;
  currentPhotoIndex = 0;

  virtualTour = false;

  constructor(private stateCityService: StateCityService, private propertyService: PropertyService, private router: Router) {
  }

  isPageValid(pageNumber: number): boolean {
    if (pageNumber === 1) {
      return (
        this.stateCityService.getStates().includes(this.state) &&
        this.stateCityService.getCities(this.state).includes(this.city) &&
        this.address.length > 10 &&
        parseInt(this.pinCode).toString().length === 6
      );
    }
    if (pageNumber === 3) {
      return (
        this.price >= 1000 &&
        this.description.length > 10
      );
    }
    // all other pages are true
    return true;
  }

  createProperty(): void {
    if (!this.isPageValid(1) || !this.isPageValid(3)) {
      return;
    }
    this.creatingProperty = true;
    const propertyBody = this.getPropertyBody();
    this.propertyService.createProperty(propertyBody).subscribe(res => {
      this.propertyId = res.propertyId;
      this.uploadingPhoto = true;
      this.uploadPhotos();
    }, err => {
      alert(err.message);
      this.creatingProperty = false;
      this.uploadingPhoto = false;
    });
  }

  uploadPhotos(): void {
    if (this.currentPhotoIndex >= this.images.length) {
      // all photos uploads, enjoy
      this.uploadingPhoto = false;
      const newPropertyId = this.propertyId;
      this.resetData();
      this.router.navigate(['property', 'id', newPropertyId]);
      return;
    }
    const image = this.images[this.currentPhotoIndex];
    this.propertyService.uploadImage(image, this.propertyId).subscribe(res => {
      this.currentPhotoIndex++;
      this.uploadPhotos();
    }, err => {
      alert(err.message);
      this.uploadingPhoto = false;
      this.creatingProperty = false;
    });
  }

  private resetData(): void {
    this.purpose = 'Sell';
    this.type = 'Home';
    this.state = '';
    this.city = '';
    this.pinCode = '';
    this.address = '';
    this.bedrooms = 1;
    this.bathrooms = 1;
    this.area = 1;
    this.floors = 1;
    this.bhk = 1;
    this.images = [];
    this.price = 1000;
    this.description = '';
    this.year = 1990;

    this.creatingProperty = false;
    this.uploadingPhoto = false;
    this.propertyId = 0;
    this.currentPhotoIndex = 0;
  }

  getPropertyBody(): PropertyRequestBody {
    return {
      address: this.address,
      area: this.area,
      bhk: this.bhk,
      purpose: this.purpose,
      builtYear: this.year,
      city: this.city,
      bathrooms: this.bathrooms,
      floors: this.floors,
      bedrooms: this.bedrooms,
      pinCode: parseInt(this.pinCode),
      price: this.price,
      description: this.description,
      state: this.state,
      type: this.type,
      virtualTour: this.virtualTour
    };
  }
}
