import { TestBed } from '@angular/core/testing';

import { Feature3Service } from './feature3.service';

describe('Feature3Service', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: Feature3Service = TestBed.get(Feature3Service);
    expect(service).toBeTruthy();
  });
});
