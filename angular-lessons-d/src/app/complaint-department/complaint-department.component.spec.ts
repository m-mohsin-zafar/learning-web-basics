import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComplaintDepartmentComponent } from './complaint-department.component';

describe('ComplaintDepartmentComponent', () => {
  let component: ComplaintDepartmentComponent;
  let fixture: ComponentFixture<ComplaintDepartmentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ComplaintDepartmentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ComplaintDepartmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
