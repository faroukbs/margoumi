import { Component, OnInit } from '@angular/core';
import { CartItem } from 'src/app/common/cart-item';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-cart-details',
  templateUrl: './cart-details.component.html',
  styleUrls: ['./cart-details.component.css']
})
export class CartDetailsComponent implements OnInit {
  

cartItems : CartItem[] = JSON.parse(localStorage.getItem('cartItems') || '{}');
// localStorage.getItem('cartItems') ? JSON.parse(localStorage.getItem('cartItems') || '{}') : [];
totalPrice: number =0;
totalQuantity: number = 0;

  constructor(private cartService: CartService) { }

  ngOnInit(): void {
    this.listCartDetails()
    this.cartItems = JSON.parse(localStorage.getItem('cartItems') || '{}');
    console.log(this.cartItems)
  }

  listCartDetails(){
    // get a handle to the cart items
    this.cartItems = this.cartService.cartItems;

    // subscribe to the cart totalPrice
    this.cartService.totalPrice.subscribe(
      data => this.totalPrice = data
    );

    // subscribe to the cart totalQuantity
    this.cartService.totalQuantity.subscribe( 
      data => this.totalQuantity = data
    );

    // compute cart total price and quantity
    this.cartService.computeCartTotals();
  }

  incrementQuantity(theCartItem: CartItem) {
    this.cartService.addToCart(theCartItem);
    console.log(this.cartItems)
    this.cartItems = JSON.parse(localStorage.getItem('cartItems') || '{}');
  }

  decrementQuantity(theCartItem: CartItem) {
    this.cartService.decrementQuantity(theCartItem);
    this.cartItems = JSON.parse(localStorage.getItem('cartItems') || '{}');
    
  }

  remove(theCartItem: CartItem) {
    this.cartService.remove(theCartItem);
    this.cartItems = JSON.parse(localStorage.getItem('cartItems') || '{}');
  }


}
