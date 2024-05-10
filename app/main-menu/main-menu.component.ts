import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-main-menu',
  standalone: true,
  imports: [],
  templateUrl: './main-menu.component.html',
  styleUrl: './main-menu.component.css'
})
export class MainMenuComponent {
  id: number;
  param: number;
  
  constructor(private activateRoute: ActivatedRoute, private router: Router) {
    this.id = activateRoute.snapshot.params['id']; // извлекает значение id из параметров текущего роута
    this.param = 0;
  }
}
