import { Component } from '@angular/core';
import { CategoryCatalogueComponent } from '../category-catalogue/category-catalogue.component';
import { RouterLink, RouterModule, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-catalogue',
  standalone: true,
  imports: [CategoryCatalogueComponent, RouterLink, RouterOutlet],
  templateUrl: './catalogue.component.html',
  styleUrl: './catalogue.component.css'
})
export class CatalogueComponent {

}
