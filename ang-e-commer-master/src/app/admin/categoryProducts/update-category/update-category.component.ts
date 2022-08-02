import { Router, ActivatedRoute } from '@angular/router';
import { CategoryProductService } from 'src/app/services/category-product.service';
import { CategoryProduct } from 'src/app/common/category-product';
import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-update-category',
  templateUrl: './update-category.component.html',
  styleUrls: [
    './update-category.component.css',
    '../../../../assets/admin/css/paper-dashboard.css?v=2.0.1',
    '../../../../assets/admin/demo/demo.css',
    '../../../../assets/admin/css/bootstrap.min.css',
  ],
  encapsulation: ViewEncapsulation.ShadowDom,
})
export class UpdateCategoryComponent implements OnInit {
  category: CategoryProduct = new CategoryProduct();
  listCategory ! : CategoryProduct[];
  id: number;
  route: ActivatedRoute;
  constructor(
    private categoryService: CategoryProductService,
    router: Router,
    
  ) {}

  ngOnInit(): void {}

  updateCategorya() {
    const routeParams = this.route.snapshot.paramMap; //getting id from the route
    const productIdFromRoute = Number(routeParams.get('id'));
    this.categoryService.updateCategorie(this.category, productIdFromRoute).subscribe(
      (data) => console.log(data),
      (error) => console.log(error)
    );
    this.category = new CategoryProduct();
  }
}
