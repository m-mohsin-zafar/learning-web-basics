import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomAccordianComponent } from './custom-accordian.component';

describe('CustomAccordianComponent', () => {
  let component: CustomAccordianComponent;
  let fixture: ComponentFixture<CustomAccordianComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CustomAccordianComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomAccordianComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
