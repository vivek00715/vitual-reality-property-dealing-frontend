import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HouseMapGeneratorComponent } from './house-map-generator.component';

describe('HouseMapGeneratorComponent', () => {
  let component: HouseMapGeneratorComponent;
  let fixture: ComponentFixture<HouseMapGeneratorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HouseMapGeneratorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HouseMapGeneratorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
