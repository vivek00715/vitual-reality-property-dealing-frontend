import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HouseModelViewerComponent } from './house-model-viewer.component';

describe('HouseModelViewerComponent', () => {
  let component: HouseModelViewerComponent;
  let fixture: ComponentFixture<HouseModelViewerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HouseModelViewerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HouseModelViewerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
