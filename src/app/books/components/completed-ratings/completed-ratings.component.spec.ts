import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CompletedRatingsComponent } from './completed-ratings.component';

describe('CompletedRatingsComponent', () => {
  let component: CompletedRatingsComponent;
  let fixture: ComponentFixture<CompletedRatingsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CompletedRatingsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CompletedRatingsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
