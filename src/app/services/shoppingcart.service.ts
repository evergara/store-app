import { Injectable } from '@angular/core';
import { Product } from '@app/models/product.model';

@Injectable({
  providedIn: 'root',
})
export class ShoppingCartService {
  private myShoppingCart: Product[] = [];
  constructor() {}

  addProduct(product: Product) {
    this.myShoppingCart.push(product);
  }

  getTotalPrice(): number {
    return this.myShoppingCart.reduce((sum, item) => sum + item.price, 0);
  }

  getTotalItem(): number {
    return this.myShoppingCart.length;
  }
}
