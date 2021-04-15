import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PropertyInformationImagesComponent } from './property-information-images.component';

describe('PropertyInformationImagesComponent', () => {
  let component: PropertyInformationImagesComponent;
  let fixture: ComponentFixture<PropertyInformationImagesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PropertyInformationImagesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PropertyInformationImagesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
