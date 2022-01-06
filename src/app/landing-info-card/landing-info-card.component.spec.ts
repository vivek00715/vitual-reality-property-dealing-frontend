import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LandingInfoCardComponent } from './landing-info-card.component';

describe('LandingInfoCardComponent', () => {
  let component: LandingInfoCardComponent;
  let fixture: ComponentFixture<LandingInfoCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LandingInfoCardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LandingInfoCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
