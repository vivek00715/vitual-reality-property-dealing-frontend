import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PropertySearchHeaderComponent } from './property-search-header.component';

describe('PropertySearchHeaderComponent', () => {
  let component: PropertySearchHeaderComponent;
  let fixture: ComponentFixture<PropertySearchHeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PropertySearchHeaderComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PropertySearchHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
