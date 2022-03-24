import { Feature3Module } from './feature3.module';

describe('Feature3Module', () => {
  let feature3Module: Feature3Module;

  beforeEach(() => {
    feature3Module = new Feature3Module();
  });

  it('should create an instance', () => {
    expect(feature3Module).toBeTruthy();
  });
});
