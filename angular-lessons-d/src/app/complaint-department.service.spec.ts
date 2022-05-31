import { TestBed } from '@angular/core/testing';

import { ComplaintDepartmentService } from './complaint-department.service';

describe('ComplaintDepartmentService', () => {
  let service: ComplaintDepartmentService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ComplaintDepartmentService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
