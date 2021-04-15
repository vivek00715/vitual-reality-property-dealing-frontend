import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PropertyInformationDetailsComponent } from './property-information-details.component';

describe('PropertyInformationDetailsComponent', () => {
  let component: PropertyInformationDetailsComponent;
  let fixture: ComponentFixture<PropertyInformationDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PropertyInformationDetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PropertyInformationDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
