import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { ShoppingCartService } from '@app/services/shoppingcart.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss'],
})
export class NavComponent implements OnInit, OnDestroy {
  activeMenu = false;
  counter = 0;
  
  totalShoppingCart$!: Subscription;

  constructor(private shoppingCartService: ShoppingCartService) {} //private storeService: StoreService

  ngOnInit(): void {
    this.totalShoppingCart$ =
      this.shoppingCartService.totalProductShoppingCart$.subscribe((total) => {
        this.counter = total;
      });
  }

  toggleMenu() {
    this.activeMenu = !this.activeMenu;
  }

  ngOnDestroy(): void {
    this.totalShoppingCart$.unsubscribe();
  }
}
