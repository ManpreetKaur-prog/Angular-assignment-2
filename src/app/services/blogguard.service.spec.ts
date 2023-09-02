import { TestBed } from '@angular/core/testing';

import { BlogguardService } from './blogguard.service';

describe('BlogguardService', () => {
  let service: BlogguardService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BlogguardService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
