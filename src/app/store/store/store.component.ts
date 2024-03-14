import { Component, OnInit } from '@angular/core';
import { StoreService } from '../store.service';
import { Item } from '../models/item';
import { CartService } from '../cart/cart.service';

@Component({
  selector: 'store-store',
  templateUrl: './store.component.html',
  styleUrls: ['./store.component.css']
})
export class StoreComponent implements OnInit{

  constructor(private storeService: StoreService, private cartService: CartService){}
  products: Item[] = []
  fruits: any
  vegetables: any

  async ngOnInit() {
    try {
      const veg = await this.storeService.vegetables
      const fruits = await this.storeService.fruits
      this.products = [...fruits, ...veg]
    } catch(error){
      console.error('Error fetching products', error)
    }
  }

  async vegetable() {
    const veg = await this.storeService.vegetables
    this.products = veg
  }

  async fruit() {
    const fruits = await this.storeService.fruits
    this.products = fruits
  }

  sortHigh() {
    this.products.sort((a,b) => b.price-a.price)
  }

  sortLow(){
    this.products.sort((a,b) => a.price-b.price)
  }

  sortByName(){
    this.products.sort((a,b) => {
      const namea = a.name.toUpperCase()
      const nameb = b.name.toUpperCase()
      if (namea < nameb){
        return -1
      }
      if (namea > nameb){
        return 1
      }
      return 0
    })
  }

  addToCart(item: Item){
    this.cartService.add(item)
  }



  

}
