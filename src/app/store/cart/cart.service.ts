import { Injectable } from '@angular/core';
import { CartItem, Item } from '../models/item';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  cart: CartItem[] = []

  add(item: Item): void {
    const cI = this.cart.find(i => i.id === item.id)
    if (cI != null){
      cI.quantity++
      cI.total = Math.floor((cI.quantity * item.price) * 100) / 100
    } else {
      const cartItem : CartItem = {
        id: item.id,
        name: item.name,
        price: item.price,
        quantity: 1,
        total: item.price * 1
      }
      this.cart.push(cartItem)
    }
  }

  changeQuantity(operator: string, item: CartItem): void {
    const ci = this.cart.find(i => i.id === item.id)
    if (operator === '+' && ci){
      ci.quantity++
      ci.total = Math.round((ci.quantity * ci.price) * 100) / 100
    } else if (ci) {
      if (ci.quantity == 1){
        this.cart.splice(this.cart.findIndex(i => i.id === item.id), 1)
      } else {
        ci.quantity--
        ci.total = Math.round((ci.total - ci.price) * 100) / 100 
      }
    }
  }
}
