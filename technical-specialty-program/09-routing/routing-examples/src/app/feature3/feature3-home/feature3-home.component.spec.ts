import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature3HomeComponent } from './feature3-home.component';

describe('Feature3HomeComponent', () => {
  let component: Feature3HomeComponent;
  let fixture: ComponentFixture<Feature3HomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Feature3HomeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature3HomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
