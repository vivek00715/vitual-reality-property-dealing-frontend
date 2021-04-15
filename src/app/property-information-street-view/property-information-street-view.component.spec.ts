import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PropertyInformationStreetViewComponent } from './property-information-street-view.component';

describe('PropertyInformationStreetViewComponent', () => {
  let component: PropertyInformationStreetViewComponent;
  let fixture: ComponentFixture<PropertyInformationStreetViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PropertyInformationStreetViewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PropertyInformationStreetViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
