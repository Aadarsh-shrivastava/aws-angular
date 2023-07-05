import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RaiseForReviewComponent } from './raise-for-review.component';

describe('RaiseForReviewComponent', () => {
  let component: RaiseForReviewComponent;
  let fixture: ComponentFixture<RaiseForReviewComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RaiseForReviewComponent]
    });
    fixture = TestBed.createComponent(RaiseForReviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
