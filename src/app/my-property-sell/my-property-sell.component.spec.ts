import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyPropertySellComponent } from './my-property-sell.component';

describe('MyPropertySellComponent', () => {
  let component: MyPropertySellComponent;
  let fixture: ComponentFixture<MyPropertySellComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MyPropertySellComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MyPropertySellComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
