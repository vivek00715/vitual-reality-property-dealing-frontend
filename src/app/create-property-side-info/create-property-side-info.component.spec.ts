import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreatePropertySideInfoComponent } from './create-property-side-info.component';

describe('CreatePropertySideInfoComponent', () => {
  let component: CreatePropertySideInfoComponent;
  let fixture: ComponentFixture<CreatePropertySideInfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreatePropertySideInfoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreatePropertySideInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
