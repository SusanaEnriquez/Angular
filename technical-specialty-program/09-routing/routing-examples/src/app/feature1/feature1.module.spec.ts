import { Feature1Module } from './feature1.module';

describe('Feature1Module', () => {
  let feature1Module: Feature1Module;

  beforeEach(() => {
    feature1Module = new Feature1Module();
  });

  it('should create an instance', () => {
    expect(feature1Module).toBeTruthy();
  });
});
