import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PropertyBasicDetailsComponent } from './property-basic-details.component';

describe('PropertyBasicDetailsComponent', () => {
  let component: PropertyBasicDetailsComponent;
  let fixture: ComponentFixture<PropertyBasicDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PropertyBasicDetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PropertyBasicDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
