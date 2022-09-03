import { Injectable } from '@angular/core';

import { BehaviorSubject } from 'rxjs';
import { Product } from '@app/models/product.model';

@Injectable({
  providedIn: 'root',
})
export class ShoppingCartService {
  private myShoppingCart: Product[] = [];
  private totalPriceShoppingCart: BehaviorSubject<number> =
    new BehaviorSubject<number>(0);
  private totalProductShoppingCart: BehaviorSubject<number> =
    new BehaviorSubject<number>(0);

  totalPriceShoppingCart$ = this.totalPriceShoppingCart.asObservable();
  totalProductShoppingCart$ = this.totalProductShoppingCart.asObservable();

  constructor() {}

  addProduct(product: Product) {
    this.myShoppingCart.push(product);
    this.setTotalPrice();
    this.setTotalProduct();
  }

  getTotalPrice(): number {
    return this.calculateTotalPrice();
  }

  getTotalItem(): number {
    return this.calculateTotalProduct();
  }

  private setTotalPrice(): void {
    this.totalPriceShoppingCart.next(this.calculateTotalPrice());
    //console.log('setTotalPrice ', this.totalPriceShoppingCart$);
  }

  private setTotalProduct(): void {
    this.totalProductShoppingCart.next(this.calculateTotalProduct());
    //console.log('setTotalProduct ', this.totalProductShoppingCart$);
  }

  private calculateTotalPrice(): number {
    return this.myShoppingCart.reduce((sum, item) => sum + item.price, 0);
  }

  private calculateTotalProduct(): number {
    return this.myShoppingCart.length;
  }
}
