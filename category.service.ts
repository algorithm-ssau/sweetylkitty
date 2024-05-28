import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, of } from 'rxjs';
import { Category } from '../carts';

@Injectable({
    providedIn: 'root',
})
export class CategoryService {
    public categories: Category[] = [
        {
            id: 1,
            name: 'Бенто-торт',
            description: 'Хотите невероятный вкус? да',
            img: "assets/category-bento.jpg",
        },
        {
            id: 2,
            name: 'Поздравительные торты',
            description: 'Порадуйте именинника невероятным вкусом!',
            img: 'assets/category-birthday.jpg',
        },
        {
            id: 3,
            name: 'Торты кубики',
            description: 'Необычный вид, но всегда отличный вкус!',
            img: 'assets/category-cube.jpg',
        },
        {
            id: 4,
            name: 'Торты на праздники',
            description: 'Порадуйте каждого за праздничным столом!',
            img: 'assets/category-march.jpg',
        },
        {
            id: 5,
            name: 'Муссовые торты',
            description: 'Нежный снаружи, вкусный внутри!',
            img: 'assets/category-myss.jpg',
        },
        {
            id: 6,
            name: 'Свадебные торты',
            description: 'Нежность и благородство - тонкое сочетание!',
            img: 'assets/category-wedding.jpg',
        },

      ];
      
    private activeCategoryIdSource = new BehaviorSubject<number>(0);
    activeCategoryId = this.activeCategoryIdSource.asObservable();

    constructor() {

    }

    getAllCategories(): Observable<Category[]> {
        return of(this.categories);
        
    }

    changeCategory(id: number) {
        this.activeCategoryIdSource.next(id);
    }
}