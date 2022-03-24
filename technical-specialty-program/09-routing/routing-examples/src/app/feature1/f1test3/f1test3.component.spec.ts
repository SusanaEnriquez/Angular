import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { F1test3Component } from './f1test3.component';

describe('F1test3Component', () => {
  let component: F1test3Component;
  let fixture: ComponentFixture<F1test3Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ F1test3Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(F1test3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
