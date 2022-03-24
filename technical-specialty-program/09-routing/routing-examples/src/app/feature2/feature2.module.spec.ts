import { Feature2Module } from './feature2.module';

describe('Feature2Module', () => {
  let feature2Module: Feature2Module;

  beforeEach(() => {
    feature2Module = new Feature2Module();
  });

  it('should create an instance', () => {
    expect(feature2Module).toBeTruthy();
  });
});
