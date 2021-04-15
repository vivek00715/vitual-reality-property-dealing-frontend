import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PropertyInformationVirtualViewComponent } from './property-information-virtual-view.component';

describe('PropertyInformationVirtualViewComponent', () => {
  let component: PropertyInformationVirtualViewComponent;
  let fixture: ComponentFixture<PropertyInformationVirtualViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PropertyInformationVirtualViewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PropertyInformationVirtualViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
