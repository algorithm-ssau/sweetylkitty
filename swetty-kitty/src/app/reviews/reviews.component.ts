import { NgFor, NgIf } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { ReviewsChildComponent } from '../reviews-child/reviews-child.component';

@Component({
  selector: 'app-reviews',
  standalone: true,
  imports: [NgIf, NgFor, ReactiveFormsModule, ReviewsChildComponent],
  templateUrl: './reviews.component.html',
  styleUrls: ['./reviews.component.css']
})
export class ReviewsComponent implements OnInit {
  reviewForm: FormGroup;
  reviewData: any; // Содержит данные об отзыве

  constructor(private fb: FormBuilder, private http: HttpClient) {
    this.reviewForm = this.fb.group({
      name: [''],
      review: ['']
    });
  }

  ngOnInit(): void {
    this.loadReview(1); // Укажите ID отзыва, который вы хотите загрузить
  }

  loadReview(reviewId: number): void {
    this.http.get<any>("http://127.0.0.1:8000/postgresbd/rewiews/")
      .subscribe({
        next: data => {
          this.reviewData = data[data.length - 1]; // Первый элемент массива, предполагая, что он содержит нужный отзыв
          this.setFormValues();
        },
        error: error => {
          console.error('Error fetching review:', error);
        }
  });
  }

  setFormValues(): void {
    // Устанавливаем значения полей формы из данных отзыва
    this.reviewForm.patchValue({
      name: this.reviewData.name,
      review: this.reviewData.description
    });
  }

  handleFormGroupChange(event: string): void {
    console.log(event);
  }

  catchClick(event: string): void {
    console.log(event);
  }

  submitForm(): void {
    if (this.reviewForm.valid) {
      console.log('Form submitted:', this.reviewForm.value);
      // Здесь вы можете выполнить действия по отправке данных на сервер
    } else {
      console.error('Form is invalid');
    }
  }
}

