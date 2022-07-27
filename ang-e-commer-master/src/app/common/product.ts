import { CategoryProduct } from './category-product';
export class Product {
    id!: number  ;
    name!:string;
    description!:string;
    image!:string;
    nprix!:number;
    gprix!:number;
    quantity!:number;
    category!:CategoryProduct;
    createdDate!:Date;
    updatedDate!:Date;
    
}
