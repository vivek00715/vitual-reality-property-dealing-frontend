import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LandingFooterComponent } from './landing-footer.component';

describe('LandingFooterComponent', () => {
  let component: LandingFooterComponent;
  let fixture: ComponentFixture<LandingFooterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LandingFooterComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LandingFooterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should render footer', () => {
    const fixture = TestBed.createComponent(LandingFooterComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement;
    expect(compiled.querySelector('footer')).toBeTruthy();
  });

  it('should render div', () => {
    const fixture = TestBed.createComponent(LandingFooterComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement;
    expect(compiled.querySelector('div')).toBeTruthy();
  });
});
