import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PropertyCreateImagesComponent } from './property-create-images.component';

describe('PropertyCreateImagesComponent', () => {
  let component: PropertyCreateImagesComponent;
  let fixture: ComponentFixture<PropertyCreateImagesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PropertyCreateImagesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PropertyCreateImagesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
