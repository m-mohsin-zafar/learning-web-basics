import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComplaintDepartmentDetailsComponent } from './complaint-department-details.component';

describe('ComplaintDepartmentDetailsComponent', () => {
  let component: ComplaintDepartmentDetailsComponent;
  let fixture: ComponentFixture<ComplaintDepartmentDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ComplaintDepartmentDetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ComplaintDepartmentDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
