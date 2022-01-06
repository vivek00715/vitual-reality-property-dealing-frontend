import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PropertyInformationDetailsComponent } from '../property-information-details/property-information-details.component';
import { PropertyInformationImagesComponent } from '../property-information-images/property-information-images.component';
import { PropertyInformationNearbyCardsComponent } from '../property-information-nearby-cards/property-information-nearby-cards.component';
import { PropertyInformationStreetViewComponent } from '../property-information-street-view/property-information-street-view.component';
import { PropertyInformationVirtualViewComponent } from '../property-information-virtual-view/property-information-virtual-view.component';

import { PropertyInformationComponent } from './property-information.component';

describe('PropertyInformationComponent', () => {
  let component: PropertyInformationComponent;
  let fixture: ComponentFixture<PropertyInformationComponent>;
  let compiled: HTMLElement;
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [
        PropertyInformationComponent,
        PropertyInformationImagesComponent,
        PropertyInformationNearbyCardsComponent,
        PropertyInformationDetailsComponent,
        PropertyInformationStreetViewComponent,
        PropertyInformationVirtualViewComponent,
      ],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PropertyInformationComponent);
    component = fixture.componentInstance;
    compiled = fixture.nativeElement;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it(`should have currentView property'`, () => {
    expect(component.currentView).toBeDefined();
  });

  it(`should throw exception when currentView is negative'`, () => {
    expect(() => component.setCurrentView(-1)).toThrowError(
      'New view should be between 0 and 2'
    );
  });

  it(`should throw exception when currentView is greater than 2'`, () => {
    expect(() => component.setCurrentView(3)).toThrowError(
      'New view should be between 0 and 2'
    );
  });

  it('should render top bar with 4 divs', () => {
    fixture.detectChanges();
    const topBar = compiled.querySelector('.top-bar');
    expect(topBar).toBeTruthy();
    expect(topBar?.children.length).toEqual(4);
    expect(topBar?.children[0].textContent).toContain('Search');
    expect(topBar?.children[1].textContent).toContain('Images');
    expect(topBar?.children[2].textContent).toContain('3D');
    expect(topBar?.children[3].textContent).toContain('Street');
  });

  it('should change active class of top bar divs', () => {
    fixture.detectChanges();
    const topBar = compiled.querySelector('.top-bar');
    component.setCurrentView(1);
    fixture.detectChanges();
    expect(topBar?.children[2].classList).toContain('active');
    expect(topBar?.children[3].classList).not.toContain('active');
    expect(topBar?.children[1].classList).not.toContain('active');
    component.setCurrentView(2);
    fixture.detectChanges();
    expect(topBar?.children[3].classList).toContain('active');
    expect(topBar?.children[2].classList).not.toContain('active');
    expect(topBar?.children[1].classList).not.toContain('active');
  });

  it('should render <app-property-information-images> when current view is 0', () => {
    component.setCurrentView(0);
    fixture.detectChanges();
    const element = compiled.querySelector('app-property-information-images');
    expect(element).toBeTruthy();
  });

  it('should render <app-property-information-virtual-view> when current view is 1', () => {
    fixture.detectChanges();
    component.setCurrentView(1);
    fixture.detectChanges();
    const element = compiled.querySelector(
      'app-property-information-virtual-view'
    );
    expect(element).toBeTruthy();
  });

  it('should render <app-property-information-street-view> when current view is 2', () => {
    fixture.detectChanges();
    component.setCurrentView(2);
    fixture.detectChanges();
    const element = compiled.querySelector(
      'app-property-information-street-view'
    );
    expect(element).toBeTruthy();
  });

  it('should render <app-property-information-details>', () => {
    fixture.detectChanges();
    const element = compiled.querySelector('app-property-information-details');
    expect(element).toBeTruthy();
  });

  it('should render <<app-property-information-nearby-cards>', () => {
    fixture.detectChanges();
    const element = compiled.querySelector(
      'app-property-information-nearby-cards'
    );
    expect(element).toBeTruthy();
  });
});
