import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditPropertyDetailComponent } from './edit-property-detail.component';

describe('EditPropertyDetailComponent', () => {
  let component: EditPropertyDetailComponent;
  let fixture: ComponentFixture<EditPropertyDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditPropertyDetailComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditPropertyDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
