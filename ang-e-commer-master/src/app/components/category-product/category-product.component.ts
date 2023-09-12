import { Product } from './../../common/product';
import { ProductService } from 'src/app/services/product.service';
import { CategoryProductService } from './../../services/category-product.service';
import { CategoryProduct } from './../../common/category-product';
import { Component, Input, OnInit } from '@angular/core';


@Component({
  selector: 'app-category-product',
  templateUrl: './category-product.component.html',
  styleUrls: ['./category-product.component.css']
})
export class CategoryProductComponent implements OnInit {
  categories!: CategoryProduct[];
  @Input() products!: Product[];
 
  constructor(private categoryProductService: CategoryProductService,public productService:ProductService) { }

  ngOnInit(): void {
    this.categoriesProductList();
  }
  categoriesProductList() {
    this.categoryProductService.getProductCategories().subscribe(data => {
      this.categories = data
    })
  }
  getProductByCategory(id: number){
    this.productService.getProductByCategory(id).subscribe(data => {
      this.products = data
    })
  }

  showProductByCategory(id: number){
    
    this.getProductByCategory(id);
    console.log(this.products);
  }


}
