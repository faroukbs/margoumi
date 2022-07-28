import { Product } from 'src/app/common/product';
import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/services/product.service';
import { ActivatedRoute } from '@angular/router';
import { CartItem } from 'src/app/common/cart-item';
import { CartService } from 'src/app/services/cart.service';


@Component({
  selector: 'app-productdetails',
  templateUrl: './productdetails.component.html',
  styleUrls: ['./productdetails.component.css']
})
export class ProductdetailsComponent implements OnInit {

  product:Product = new Product();

  constructor(public productService: ProductService , private cartService: CartService,
    private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe(() => {
      this.productById();
    })
  }

  productById() {
    const routeParams = this.route.snapshot.paramMap; //getting id from the route
    const productIdFromRoute = Number(routeParams.get('id'));  //stocking the product into this variable
    this.productService.getProductById(productIdFromRoute).subscribe(data => {
      this.product = data ;
    })
  }

  addToCart(){
    
    const theCartItem = new CartItem(this.product);
    this.cartService.addToCart(theCartItem);

  }
}
