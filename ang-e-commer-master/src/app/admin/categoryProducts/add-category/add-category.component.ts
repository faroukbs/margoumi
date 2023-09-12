import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Router } from '@angular/router';
import { CategoryProduct } from 'src/app/common/category-product';
import { CategoryProductService } from 'src/app/services/category-product.service';

@Component({
  selector: 'app-add-category',
  templateUrl: './add-category.component.html',
  styleUrls: ['./add-category.component.css',
  '../../../../assets/admin/css/paper-dashboard.css?v=2.0.1',
  '../../../../assets/admin/demo/demo.css',
  '../../../../assets/admin/css/bootstrap.min.css',],
  encapsulation: ViewEncapsulation.ShadowDom,
})
export class AddCategoryComponent{

  category : CategoryProduct = new CategoryProduct();

  constructor(private categoryService: CategoryProductService,private router: Router,) { }

  addCategory(): void {
    this.categoryService.addCategorie(this.category).subscribe(() => {
      this.router.navigate(['/listCategory']);
    });
  }

}
