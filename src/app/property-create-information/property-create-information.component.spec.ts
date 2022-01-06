import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PropertyCreateInformationComponent } from './property-create-information.component';

describe('PropertyCreateInformationComponent', () => {
  let component: PropertyCreateInformationComponent;
  let fixture: ComponentFixture<PropertyCreateInformationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PropertyCreateInformationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PropertyCreateInformationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
