import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature2TestComponent } from './feature2-test.component';

describe('Feature2TestComponent', () => {
  let component: Feature2TestComponent;
  let fixture: ComponentFixture<Feature2TestComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Feature2TestComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature2TestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
