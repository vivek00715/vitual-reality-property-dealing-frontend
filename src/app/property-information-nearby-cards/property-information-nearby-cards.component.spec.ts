import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PropertyInformationNearbyCardsComponent } from './property-information-nearby-cards.component';

describe('PropertyInformationNearbyCardsComponent', () => {
  let component: PropertyInformationNearbyCardsComponent;
  let fixture: ComponentFixture<PropertyInformationNearbyCardsComponent>;
  let compiled: HTMLElement;
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PropertyInformationNearbyCardsComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PropertyInformationNearbyCardsComponent);
    component = fixture.componentInstance;
    compiled = fixture.nativeElement;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have a div with class card', () => {
    expect(compiled.querySelector('.card')).toBeTruthy();
  });

  it('should have a image with class card-img-top', () => {
    const imgElement = compiled.querySelector('img');
    expect(imgElement).toBeTruthy();
    expect(imgElement?.classList).toContain('card-img-top');
  });

  it('should have an element with class card-body', () => {
    expect(compiled.querySelector('.card-body')).toBeTruthy();
  });
});
