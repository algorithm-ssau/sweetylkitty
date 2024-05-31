import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Cake } from '../carts';

@Injectable ({
    providedIn: 'root',
})
export class CakeService {

    public cakes: Cake[] = [
        {
            id: 1,
            name: 'Бенто-торт c клубникой',
            img: "assets/bento1.jpg",
            cost: 3500,
            description: 'Освежает и бодрит',
            categoryId: 1,
        },
        {
            id: 2,
            name: 'Бенто-торт c голубикой',
            img: "assets/bento2.jpg",
            cost: 4000,
            description: 'Вызывает всплеск эмоций',
            categoryId: 1,
        },
        {
            id: 3,
            name: 'Бенто-торт c персиком',
            img: "assets/bento3.jpg",
            cost: 3000,
            description: 'Помогает осознать мать природу',
            categoryId: 1,
        },
        {
            id: 4,
            name: 'Любимому мужу',
            img: "assets/hb1.jpg",
            cost: 5000,
            description: 'Хотите порадовать своего льва?',
            categoryId: 2,
        },
        {
            id: 5,
            name: 'Любимой бабуле',
            img: "assets/hb2.jpg",
            cost: 3999,
            description: 'Теплый и невероятно нежный торт для самого близкого человека',
            categoryId: 2,
        },
        {
            id: 6,
            name: 'Именной торт любимому человеку',
            img: "assets/hb3.jpg",
            cost: 2900,
            description: 'Порадуйте дорого Вам человека именной сладостью! ',
            categoryId: 2,
        },

        {
            id: 7,
            name: 'Кубы майнкрафт',
            img: "assets/cube1.jpg",
            cost: 6599,
            description: 'Купите главному фанату майнкрафта!',
            categoryId: 3,
        },
        {
            id: 8,
            name: 'Кубы разноцветные',
            img: "assets/cube2.jpg",
            cost: 4999,
            description: 'Необычные не только на вкус, но и на вид!',
            categoryId: 3,
        },
        {
            id: 9,
            name: 'Кубы многослойные',
            img: "assets/cube3.jpg",
            cost: 4900,
            description: 'Для любителей тортиков, поражающих воображение',
            categoryId: 3,
        },
            
        {
            id: 10,
            name: 'С 8 марта, дамы!',
            img: "assets/h1.jpg",
            cost: 5599,
            description: 'Порадуйте её нереальным вкусом и красотой цветов!',
            categoryId: 4,
        },
        {
            id: 11,
            name: 'Новый год!',
            img: "assets/h2.jpg",
            cost: 4999,
            description: 'Встречайте новый год правильно!',
            categoryId: 4,
        },
        {
            id: 12,
            name: 'С днём влюблённых!',
            img: "assets/h3.jpg",
            cost: 7900,
            description: 'Вырази свою любовь с помощью сладкого подарка!',
            categoryId: 4,
        },

        {
            id: 13,
            name: 'Щенячья нежность',
            img: "assets/m1.jpg",
            cost: 3599,
            description: 'Нежнее торта выне видели!',
            categoryId: 5,
        },
        {
            id: 14,
            name: 'Торт с фруктами',
            img: "assets/m2.jpg",
            cost: 5999,
            description: 'Свежий в любое время года!',
            categoryId: 5,
        },
        {
            id: 15,
            name: 'Дополнительный декор',
            img: "assets/m3.jpg",
            cost: 6900,
            description: 'Украсим Ваш тортик, следуя любой задумке',
            categoryId: 5,
        },
        {
            id: 16,
            name: 'Один ярус',
            img: "assets/w1.jpg",
            cost: 3599,
            description: 'Простой, но несомненно вкусный',
            categoryId: 6,
        },
        {
            id: 17,
            name: 'Два яруса',
            img: "assets/w2.jpg",
            cost: 6999,
            description: 'Невероятно нежный и воздушный',
            categoryId: 6,
        },
        {
            id: 18,
            name: 'Три яруса',
            img: "assets/w3.jpg",
            cost: 12900,
            description: 'Удивите каждого гостя невообразимым декором',
            categoryId: 6,
        },
        {
            id: 19,
            name: 'Бенто-торт c клубникой',
            img: "assets/bento1.jpg",
            cost: 3500,
            description: 'Освежает и бодрит',
            categoryId: 1,
        },
        {
            id: 20,
            name: 'Бенто-торт c голубикой',
            img: "assets/bento2.jpg",
            cost: 4000,
            description: 'Вызывает всплеск эмоций',
            categoryId: 1,
        },
        {
            id: 21,
            name: 'Бенто-торт c персиком',
            img: "assets/bento3.jpg",
            cost: 3000,
            description: 'Помогает осознать мать природу',
            categoryId: 1,
        },
        {
            id: 22,
            name: 'Любимому мужу',
            img: "assets/hb1.jpg",
            cost: 5000,
            description: 'Хотите порадовать своего льва?',
            categoryId: 2,
        },
        {
            id: 23,
            name: 'Любимой бабуле',
            img: "assets/hb2.jpg",
            cost: 3999,
            description: 'Теплый и невероятно нежный торт для самого близкого человека',
            categoryId: 2,
        },
        {
            id: 24,
            name: 'Именной торт любимому человеку',
            img: "assets/hb3.jpg",
            cost: 2900,
            description: 'Порадуйте дорого Вам человека именной сладостью! ',
            categoryId: 2,
        },

        {
            id: 25,
            name: 'Кубы майнкрафт',
            img: "assets/cube1.jpg",
            cost: 6599,
            description: 'Купите главному фанату майнкрафта!',
            categoryId: 3,
        },
        {
            id: 26,
            name: 'Кубы разноцветные',
            img: "assets/cube2.jpg",
            cost: 4999,
            description: 'Необычные не только на вкус, но и на вид!',
            categoryId: 3,
        },
        {
            id: 27,
            name: 'Кубы многослойные',
            img: "assets/cube3.jpg",
            cost: 4900,
            description: 'Для любителей тортиков, поражающих воображение',
            categoryId: 3,
        },
            
        {
            id: 28,
            name: 'С 8 марта, дамы!',
            img: "assets/h1.jpg",
            cost: 5599,
            description: 'Порадуйте её нереальным вкусом и красотой цветов!',
            categoryId: 4,
        },
        {
            id: 29,
            name: 'Новый год!',
            img: "assets/h2.jpg",
            cost: 4999,
            description: 'Встречайте новый год правильно!',
            categoryId: 4,
        },
        {
            id: 30,
            name: 'С днём влюблённых!',
            img: "assets/h3.jpg",
            cost: 7900,
            description: 'Вырази свою любовь с помощью сладкого подарка!',
            categoryId: 4,
        },

        {
            id: 31,
            name: 'Щенячья нежность',
            img: "assets/m1.jpg",
            cost: 3599,
            description: 'Нежнее торта выне видели!',
            categoryId: 5,
        },
        {
            id: 32,
            name: 'Торт с фруктами',
            img: "assets/m2.jpg",
            cost: 5999,
            description: 'Свежий в любое время года!',
            categoryId: 5,
        },
        {
            id: 33,
            name: 'Дополнительный декор',
            img: "assets/m3.jpg",
            cost: 6900,
            description: 'Украсим Ваш тортик, следуя любой задумке',
            categoryId: 5,
        },
        {
            id: 34,
            name: 'Один ярус',
            img: "assets/w1.jpg",
            cost: 3599,
            description: 'Простой, но несомненно вкусный',
            categoryId: 6,
        },
        {
            id: 35,
            name: 'Два яруса',
            img: "assets/w2.jpg",
            cost: 6999,
            description: 'Невероятно нежный и воздушный',
            categoryId: 6,
        },
        {
            id: 36,
            name: 'Три яруса',
            img: "assets/w3.jpg",
            cost: 12900,
            description: 'Удивите каждого гостя невообразимым декором',
            categoryId: 6,
        },
    ];

    constructor() {};

    getAllCakes(): Observable<Cake[]> {
        return of(this.cakes);
    }

    getCakeById(cakeId: number): Observable<Cake | undefined> {
        return of(this.cakes.find((cake) => cake.id === cakeId));
    }

    getCakesOfCategory(categoryId: number): Observable<Cake[]> {
        return of(
            this.cakes.filter((cake) => cake.categoryId === categoryId)
        );
    }
}