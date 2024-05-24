import { NgFor, NgIf } from '@angular/common';
import { Component, Output, EventEmitter } from '@angular/core';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule} from '@angular/forms';


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
  imports: [ReactiveFormsModule, NgIf, NgFor, FormsModule],
  templateUrl: './reviews-child.component.html',
  styleUrl: './reviews-child.component.css'
})
export class ReviewsChildComponent {
  user: User[] = [];
  user_name = '';
  user_email = '';
  user_phone = '';

  @Output()
  onClicked = new EventEmitter<string>();

  addUser() {
    this.console_log();
    this.user.push(new User(this.user_name, this.user_email, this.user_phone));
  }

  onNameChange(): void {
    console.log('Изменение: ' + this.user_name);
  }

  console_log() {
    this.onClicked.emit(
      this.user_name + ' ' + this.user_email + '' + this.user_phone
    );
  }
}
