import { TestBed } from '@angular/core/testing';

import { SomeoneProfileService } from './someone-profile.service';

describe('SomeoneProfileService', () => {
  let service: SomeoneProfileService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SomeoneProfileService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
