import { Component } from '@angular/core';
import { CartService } from '../cart/cart.service';
import { CartItem } from '../models/item';

@Component({
  selector: 'store-total',
  templateUrl: './total.component.html',
  styleUrls: ['./total.component.css']
})
export class TotalComponent {

  constructor(private cartService: CartService){}
  cart : CartItem[] = this.cartService.cart

  getTotal(){
    let sum = 0;
    this.cart.forEach((i) => {
      sum += i.total
    })
    return sum
  }


}
