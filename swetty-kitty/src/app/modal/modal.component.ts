import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { Cake } from '../carts';

@Component({
  selector: 'app-modal',
  standalone: true,
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css'],
  imports: [CommonModule] // добавляем CommonModule здесь
})
export class ModalComponent {
  @Input() cake?: Cake;

  closeModal() {
    this.cake = undefined;
  }
}