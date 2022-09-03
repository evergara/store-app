import { Component, OnInit } from '@angular/core';
import { Product } from '@app/models/product.model';
import { ProductService } from '@app/services/product.service';
import { ShoppingCartService } from '@app/services/shoppingcart.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss'],
})
export class ProductsComponent implements OnInit {
  totalItemShoppingCart: number;
  total: number = 0;
  products: Product[];
  today: Date;
  date: Date;

  constructor(
    private shoppingCartService: ShoppingCartService,
    private productsServices: ProductService
  ) {
    //this.products = [];
    this.total = 0;
    this.today = new Date(2019, 1, 1);
    this.date = new Date(2021, 1, 21);
    this.totalItemShoppingCart = 0;
    this.products = [];
  }

  ngOnInit(): void {
    this.getAllProduct();
    this.shoppingCart();
  }

  getAllProduct(): void {
    this.productsServices.getAllProduct().subscribe((products) => {
      this.products = products;
    });
  }

  shoppingCart(): void {
    this.getTotalPriceInShoppingCart();
    this.getTotalItemsShoppingCart();
  }

  getTotalPriceInShoppingCart(): void {
    this.total = this.shoppingCartService.getTotalPrice();
  }

  getTotalItemsShoppingCart(): void {
    this.totalItemShoppingCart = this.shoppingCartService.getTotalItem();
  }

  onAddToShoppingCart(product: Product) {
    this.shoppingCartService.addProduct(product);
    this.shoppingCart();
    console.log(product);
  }
}
