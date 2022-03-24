import { TestBed, async, inject } from '@angular/core/testing';

import { Test3Guard } from './test3.guard';

describe('Test3Guard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [Test3Guard]
    });
  });

  it('should ...', inject([Test3Guard], (guard: Test3Guard) => {
    expect(guard).toBeTruthy();
  }));
});
