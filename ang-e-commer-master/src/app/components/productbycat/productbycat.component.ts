import { ActivatedRoute } from '@angular/router';
import { ProductService } from 'src/app/services/product.service';
import { Product } from './../../common/product';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-productbycat',
  templateUrl: './productbycat.component.html',
  styleUrls: ['./productbycat.component.css'],
})
export class ProductbycatComponent implements OnInit {
  products!: Product[];
  id: number;

  constructor(
    public productService: ProductService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    //relodaing page
    this.route.params.subscribe((params) => {
      this.getProductByCategory();
    });
  }
  getProductByCategory() {
    this.id = this.route.snapshot.params['id'];
    this.productService.getProductByCategory(this.id).subscribe((data) => {
      this.products = data;
    });
  }
}
