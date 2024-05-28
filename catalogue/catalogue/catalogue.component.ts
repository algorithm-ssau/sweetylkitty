import { Component } from '@angular/core';
import { CategoryCatalogueComponent } from '../category-catalogue/category-catalogue.component';
import { RouterLink, RouterModule, RouterOutlet } from '@angular/router';
import { CategoryService } from '../services/category.service';

@Component({
  selector: 'app-catalogue',
  standalone: true,
  imports: [CategoryCatalogueComponent, RouterLink, RouterOutlet],
  templateUrl: './catalogue.component.html',
  styleUrl: './catalogue.component.css'
})
export class CatalogueComponent {

  constructor(private categoryService: CategoryService) {

  }

  setCategory(id: number) {
    this.categoryService.changeCategory(id);
  }
}
