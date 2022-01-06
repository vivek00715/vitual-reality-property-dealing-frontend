import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HouseModelMainComponent } from './house-model-main.component';

describe('HouseModelMainComponent', () => {
  let component: HouseModelMainComponent;
  let fixture: ComponentFixture<HouseModelMainComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HouseModelMainComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HouseModelMainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
