import { ComponentFixture, TestBed } from '@angular/core/testing';

import {
  PropertyInformationDetailsComponent,
  PropertyData,
} from './property-information-details.component';

describe('PropertyInformationDetailsComponent', () => {
  let component: PropertyInformationDetailsComponent;
  let fixture: ComponentFixture<PropertyInformationDetailsComponent>;
  let compiled: HTMLElement;
  let data: PropertyData = {
    street: 'street',
    city: 'city',
    state: 'state',
    pincode: 123456,
    price: 123123214,
    beds: 4,
    baths: 3,
    area: 2000,
    description: 'description',
    listedBy: 'user',
    status: 'Active',
    propertyType: 'type',
    yearBuilt: 2021,
    community: 'community',
    lotSize: 6970,
    style: 'Two Story',
  };

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PropertyInformationDetailsComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PropertyInformationDetailsComponent);
    component = fixture.componentInstance;
    compiled = fixture.nativeElement;
    component.data = data;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have correct address', () => {
    const addressElement = compiled.querySelector('[data-angular="address"]');
    expect(addressElement).toBeTruthy();
    expect(addressElement?.textContent).toContain(data.city);
    expect(addressElement?.textContent).toContain(data.street);
    expect(addressElement?.textContent).toContain(data.state);
    expect(addressElement?.textContent).toContain(data.pincode);
  });

  it('should display correct property details', () => {
    const propertyDetails = compiled.querySelector(
      '[data-angular="property-details"]'
    );
    expect(propertyDetails).toBeTruthy();
    expect(propertyDetails?.textContent).toContain(
      (+data.price.toFixed(2)).toLocaleString()
    );
    expect(propertyDetails?.textContent).toContain(data.beds);
    expect(propertyDetails?.textContent).toContain(data.baths);
    expect(propertyDetails?.textContent).toContain(data.area);
  });

  it('should display correct home facts', () => {
    const propertyDetails = compiled.querySelector(
      '[data-angular="home-facts"]'
    );
    expect(propertyDetails).toBeTruthy();
    expect(propertyDetails?.textContent).toContain(data.status);
    expect(propertyDetails?.textContent).toContain(data.propertyType);
    expect(propertyDetails?.textContent).toContain(data.yearBuilt);
    expect(propertyDetails?.textContent).toContain(data.community);
    expect(propertyDetails?.textContent).toContain(data.style);
    expect(propertyDetails?.textContent).toContain(data.lotSize);
    expect(propertyDetails?.textContent).toContain(data.listedBy);
  });
});
