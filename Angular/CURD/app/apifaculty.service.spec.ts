import { TestBed } from '@angular/core/testing';

import { ApifacultyService } from './apifaculty.service';

describe('ApifacultyService', () => {
  let service: ApifacultyService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ApifacultyService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
