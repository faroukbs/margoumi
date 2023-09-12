import { ProductService } from './../../services/product.service';
import { Product } from './../../common/product';
import { Component, Input, OnInit } from '@angular/core';
import { CartItem } from 'src/app/common/cart-item';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  @Input() products: Product[] = [];
  

  constructor(public productService: ProductService, private cartService: CartService) {

  }

  ngOnInit(): void {
    
  

  }

  addToCart(product: Product){
    const theCartItem = new CartItem(product);
    this.cartService.addToCart(theCartItem);
  }


  

}
