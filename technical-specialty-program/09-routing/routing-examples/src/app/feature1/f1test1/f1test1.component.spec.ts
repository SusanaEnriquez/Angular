import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { F1test1Component } from './f1test1.component';

describe('F1test1Component', () => {
  let component: F1test1Component;
  let fixture: ComponentFixture<F1test1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ F1test1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(F1test1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
