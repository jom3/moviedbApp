import { TestBed } from '@angular/core/testing';

import { MoviebdService } from './moviebd.service';

describe('MoviebdService', () => {
  let service: MoviebdService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MoviebdService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
