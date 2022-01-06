import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PropertyInformationImagesComponent } from './property-information-images.component';

describe('PropertyInformationImagesComponent', () => {
  let component: PropertyInformationImagesComponent;
  let fixture: ComponentFixture<PropertyInformationImagesComponent>;
  let compiled: HTMLElement;
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PropertyInformationImagesComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PropertyInformationImagesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should render 3 images', () => {
    fixture = TestBed.createComponent(PropertyInformationImagesComponent);
    compiled = fixture.nativeElement;
    fixture.detectChanges();
    expect(compiled.querySelectorAll('img').length).toEqual(3);
  });
});
