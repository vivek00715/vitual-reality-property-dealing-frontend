import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PropertyRoomDetailsComponent } from './property-room-details.component';

describe('PropertyRoomDetailsComponent', () => {
  let component: PropertyRoomDetailsComponent;
  let fixture: ComponentFixture<PropertyRoomDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PropertyRoomDetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PropertyRoomDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
