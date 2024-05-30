import { NgFor, NgIf } from '@angular/common';
import { Component} from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { ReviewsChildComponent } from '../reviews-child/reviews-child.component';


@Component({
  selector: 'app-reviews',
  standalone: true,
  imports: [NgIf, NgFor, ReactiveFormsModule, ReviewsChildComponent],
  templateUrl: './reviews.component.html',
  styleUrl: './reviews.component.css'
})
export class ReviewsComponent {
  handleFormGroupChange(event: string): void {
    console.log(event);
  }
  catchClick(event: string) {
    console.log(event);
  }
}

