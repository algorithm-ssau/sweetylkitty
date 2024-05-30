import { Component, Output, EventEmitter } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { NgIf, NgFor } from '@angular/common';
import { FormsModule } from '@angular/forms';

export class User {
  constructor(
    public name: string,
    public email: string,
    public phone: string
  ) {}
}

@Component({
  selector: 'app-reviews-child',
  standalone: true,
  imports: [FormsModule, NgIf, NgFor, HttpClientModule],
  templateUrl: './reviews-child.component.html',
  styleUrls: ['./reviews-child.component.css']
})
export class ReviewsChildComponent {
  user: User[] = [];
  user_name = '';
  user_email = '';
  user_phone = '';

  constructor(private http: HttpClient) {}

  @Output() onClicked = new EventEmitter<string>();

  addUser() {
    if (this.user_name && this.user_email && this.user_phone) {
      this.console_log();
      this.user.push(new User(this.user_name, this.user_email, this.user_phone));
      this.http.post('http://127.0.0.1:8000/postgresbd/rewiews/', {
        name: this.user_name,
        email: this.user_email,
        description: this.user_phone
      }).subscribe({
        next: response => {
          console.log('Review submitted successfully', response);
        },
        error: error => {
          console.error('Error submitting review', error);
        }
      });
    } else {
      console.error('Form is invalid');
    }
  }

  onNameChange(): void {
    console.log('Изменение: ' + this.user_name);
  }

  console_log() {
    this.onClicked.emit(
      this.user_name + ' ' + this.user_email + ' ' + this.user_phone
    );
  }
}