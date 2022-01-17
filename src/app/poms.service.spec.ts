import { TestBed } from '@angular/core/testing';

import { PomsService } from './poms.service';

describe('PomsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: PomsService = TestBed.get(PomsService);
    expect(service).toBeTruthy();
  });
});
