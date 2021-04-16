import { NO_ERRORS_SCHEMA } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CityData, PropertySearchComponent } from './property-search.component';
// import {SafePipe} from '../safe.pipe';
import {SafePipe} from './property-search.component';

describe('PropertySearchComponent', () => {
  let component: PropertySearchComponent;
  let fixture: ComponentFixture<PropertySearchComponent>;
  let compiled: HTMLElement;
  let safe:SafePipe;
  let data:CityData={
    street:'35 BN,',
    city: 'Lucknow',
    state: 'UP',
    description:"Welcome to Lucknow , City of Nawabs. Muskuraaiye Aap Lucknow me hai",
    propertyType: 'Residentials, Office'

  };
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PropertySearchComponent,SafePipe ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PropertySearchComponent);
    component = fixture.componentInstance;
    compiled = fixture.nativeElement;
    component.data=data;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have correct city address', () => {
    const addressElement = compiled.querySelector('[data-angular="address"]');
    expect(addressElement).toBeTruthy();
    expect(addressElement?.textContent).toContain(data.street);
    expect(addressElement?.textContent).toContain(data.city);
    expect(addressElement?.textContent).toContain(data.state);
  });

  it('should have correct city description', () => {
    const addressElement = compiled.querySelector('[data-angular="description"]');
    expect(addressElement).toBeTruthy();
    expect(addressElement?.textContent).toContain(data.description);
  });

  it('should have correct city description', () => {
    const addressElement = compiled.querySelector('[data-angular="propertyType"]');
    expect(addressElement).toBeTruthy();
    expect(addressElement?.textContent).toContain(data.propertyType);
  });

  it('should have correct city description', () => {
    const addressElement = compiled.querySelector('[data-angular="totalAvailability"]');
    expect(addressElement).toBeTruthy();
    expect(addressElement?.textContent).toContain(component.list.length);
  });


});
