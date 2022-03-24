import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature2HomeComponent } from './feature2-home.component';

describe('Feature2HomeComponent', () => {
  let component: Feature2HomeComponent;
  let fixture: ComponentFixture<Feature2HomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Feature2HomeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature2HomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
