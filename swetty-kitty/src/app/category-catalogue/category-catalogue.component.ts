import { Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { Cake, Category } from '../carts';
import { CategoryService } from '../services/category.service';
import { CakeService } from '../services/cake.service';
import { CommonModule, NgFor } from '@angular/common';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-category-catalogue',
  standalone: true,
  imports: [NgFor, CommonModule, RouterLinkActive, RouterOutlet, RouterLink],
  templateUrl: './category-catalogue.component.html',
  styleUrl: './category-catalogue.component.css'
})
export class CategoryCatalogueComponent implements OnInit{

categories: Category[] = [];
activeCategoryname: string = '';
cakes: Cake[] = [];
cakes1: Cake[] = [];
cakes2: Cake[] =[];
cakes3: Cake[] =[];
activecategoryId: number = 0;

constructor(
  private categoryService: CategoryService,
  private cakeService: CakeService,
) {
  this.categoryService.activeCategoryId.subscribe(categoryId => {
    this.activecategoryId = categoryId;
   })
}
 ngOnInit(): void {
   this.getCategories();
   this.getCakes();
   this.divideCake();
   
 }
 
 divideCake() {
  const len = this.cakes.length;
  const partSize = Math.ceil(len / 3);

  this.cakes1 = this.cakes.slice(0, partSize);
  this.cakes2 = this.cakes.slice(partSize, partSize * 2);
  this.cakes3 = this.cakes.slice(partSize * 2);
}

 getCategories(): void {
  this.categoryService
  .getAllCategories()
  .subscribe((categories) => (this.categories = categories));
  this.activeCategoryname = this.categories[this.activecategoryId].name;
 }

 getCakes(): void {
  this.cakeService.getCakesOfCategory(this.categories[this.activecategoryId].id).subscribe((cakes) => (this.cakes = cakes));
 }

 changeCategory(id: number): void {
  this.activecategoryId = id-1;
  console.log(this.activecategoryId);
  this.categoryService
  .getAllCategories()
  .subscribe((categories) => (this.categories = categories));
  this.activeCategoryname = this.categories[this.activecategoryId].name;
  this.cakeService.getCakesOfCategory(this.categories[this.activecategoryId].id).subscribe((cakes) => (this.cakes = cakes));
  this.divideCake();
 }

}
