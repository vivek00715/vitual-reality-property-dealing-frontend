import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyPropertyRentComponent } from './my-property-rent.component';

describe('MyPropertyRentComponent', () => {
  let component: MyPropertyRentComponent;
  let fixture: ComponentFixture<MyPropertyRentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MyPropertyRentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MyPropertyRentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
