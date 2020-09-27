import { TestBed } from '@angular/core/testing';

import { ArtworkUpService } from './artwork-up.service';

describe('ArtworkUpService', () => {
  let service: ArtworkUpService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ArtworkUpService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
