import { TestBed } from '@angular/core/testing';

import { MoviesSerService } from './movies-ser.service';

describe('MoviesSerService', () => {
  let service: MoviesSerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MoviesSerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
