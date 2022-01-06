import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PropertyLocationDetailsComponent } from './property-location-details.component';

describe('PropertyLocationDetailsComponent', () => {
  let component: PropertyLocationDetailsComponent;
  let fixture: ComponentFixture<PropertyLocationDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PropertyLocationDetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PropertyLocationDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
