import { TestBed } from '@angular/core/testing';

import { BloodrequestService } from './bloodrequest.service';

describe('BloodrequestService', () => {
  let service: BloodrequestService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BloodrequestService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
