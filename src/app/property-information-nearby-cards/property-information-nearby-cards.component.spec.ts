import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PropertyInformationNearbyCardsComponent } from './property-information-nearby-cards.component';

describe('PropertyInformationNearbyCardsComponent', () => {
  let component: PropertyInformationNearbyCardsComponent;
  let fixture: ComponentFixture<PropertyInformationNearbyCardsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PropertyInformationNearbyCardsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PropertyInformationNearbyCardsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
