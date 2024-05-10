import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReviewsChildComponent } from './reviews-child.component';

describe('ReviewsChildComponent', () => {
  let component: ReviewsChildComponent;
  let fixture: ComponentFixture<ReviewsChildComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ReviewsChildComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ReviewsChildComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
