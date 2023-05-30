import { TestBed } from '@angular/core/testing';

import { MovieApiSerivceService } from './movie-api-serivce.service';

describe('MovieApiSerivceService', () => {
  let service: MovieApiSerivceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MovieApiSerivceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
