import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PropertyCreateStepsComponent } from './property-create-steps.component';

describe('PropertyCreateStepsComponent', () => {
  let component: PropertyCreateStepsComponent;
  let fixture: ComponentFixture<PropertyCreateStepsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PropertyCreateStepsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PropertyCreateStepsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
