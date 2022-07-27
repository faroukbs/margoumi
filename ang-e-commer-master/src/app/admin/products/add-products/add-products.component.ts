import { CategoryProduct } from './../../../common/category-product';
import { CategoryProductService } from './../../../services/category-product.service';
import { Product } from 'src/app/common/product';
import { ProductService } from 'src/app/services/product.service';
import { Router } from '@angular/router';
import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-add-products',
  templateUrl: './add-products.component.html',
  styleUrls: [
    './add-products.component.css',
    '../../../../assets/admin/css/paper-dashboard.css?v=2.0.1',
    '../../../../assets/admin/demo/demo.css',
    '../../../../assets/admin/css/bootstrap.min.css',
  ],
  encapsulation: ViewEncapsulation.ShadowDom,
})
export class AddProductsComponent implements OnInit {
  product: Product = new Product();
  categoryList: CategoryProduct[];
  constructor(
    private router: Router,
    private productService: ProductService,
    private categoryProduct: CategoryProductService
  ) {}

  ngOnInit(): void {
    this.categoryProduct.getProductCategories().subscribe((data: CategoryProduct[]) => {
      this.categoryList = data;
    }
    );
  }

  addProduct(): void {
    this.productService.addProduct(this.product).subscribe(() => {
      this.router.navigate(['/listProduct']);
    });
  }
  setNewCategory(category: CategoryProduct): void {
    console.log(category);
    this.product.category = category;
    }
}
