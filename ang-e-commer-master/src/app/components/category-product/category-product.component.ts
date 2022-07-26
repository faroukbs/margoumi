import { CategoryProductService } from './../../services/category-product.service';
import { CategoryProduct } from './../../common/category-product';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-category-product',
  templateUrl: './category-product.component.html',
  styleUrls: ['./category-product.component.css']
})
export class CategoryProductComponent implements OnInit {
  categories!: CategoryProduct[];
  constructor(private categoryProductService: CategoryProductService) { }

  ngOnInit(): void {
    this.categoriesProductList();
  }
  categoriesProductList() {
    this.categoryProductService.getProductCategories().subscribe(data => {
      this.categories = data
    })
  }


}
