import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreatePropertyTimelineComponent } from './create-property-timeline.component';

describe('CreatePropertyTimelineComponent', () => {
  let component: CreatePropertyTimelineComponent;
  let fixture: ComponentFixture<CreatePropertyTimelineComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreatePropertyTimelineComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreatePropertyTimelineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
