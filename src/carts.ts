export interface Category  {
    id: number;
    name: string;
    description: string;
    img: string;
}

export interface Cake {
    id: number;
    name: string;
    img: string;
    cost: number;
    description: string;
    categoryId: number;
}