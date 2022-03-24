import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { F1test2Component } from './f1test2.component';

describe('F1test2Component', () => {
  let component: F1test2Component;
  let fixture: ComponentFixture<F1test2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ F1test2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(F1test2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
