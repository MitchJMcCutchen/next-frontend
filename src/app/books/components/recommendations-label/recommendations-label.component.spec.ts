import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RecommendationsLabelComponent } from './recommendations-label.component';

describe('RecommendationsLabelComponent', () => {
  let component: RecommendationsLabelComponent;
  let fixture: ComponentFixture<RecommendationsLabelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RecommendationsLabelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RecommendationsLabelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
