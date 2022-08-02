import { Router } from '@angular/router';
import { ProductService } from 'src/app/services/product.service';
import { Product } from 'src/app/common/product';
import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-producs-list',
  templateUrl: './producs-list.component.html',
  styleUrls: [
    './producs-list.component.css',
    '../../../../assets/admin/css/paper-dashboard.css?v=2.0.1',
    '../../../../assets/admin/demo/demo.css',
    '../../../../assets/admin/css/bootstrap.min.css',
  ],
  encapsulation: ViewEncapsulation.ShadowDom,
})
export class ProducsListComponent implements OnInit {
  productList: Array<Product> = [];
  product: Product = new Product();
  constructor(public productService: ProductService, private router: Router) {}
  ngOnInit(): void {
    return this.getProducts();
  }
  getProducts(): void {
    this.productService.getProductList().subscribe((data: Product[]) => {
      this.productList = data;
    });
  }

  deleteProduct(id : number): void {
    this.productService.deleteProduct(id).subscribe(()=>(this.productList = this.productList.filter((t) => t.id !== id)));

}
 updateProduct(){
    
 }

}