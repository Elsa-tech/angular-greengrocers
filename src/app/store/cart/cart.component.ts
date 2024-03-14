import { Component } from '@angular/core';
import { CartService } from './cart.service';
import { CartItem } from '../models/item';

@Component({
  selector: 'store-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent {

  constructor(private cartService: CartService){}

  cart : CartItem[] = this.cartService.cart

  add(item: CartItem){
    this.cartService.changeQuantity('+', item)
  }
  subtract(item: CartItem){
    this.cartService.changeQuantity('-', item)
  }
}
