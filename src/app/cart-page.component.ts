import { Component } from '@angular/core';
import { CartService } from './cart.service';
import { Product } from './entity';

@Component({
  selector: 'app-cart-page',
  templateUrl: './cart-page.component.html',
  styleUrls: ['./cart-page.component.css'],
})
export class CartPageComponent {
  constructor(private readonly cartService: CartService) {}

  readonly items$ = this.cartService.items$;
  readonly itemCount$ = this.cartService.itemCount$;

  removeItem(id: Product['id']) {
    this.cartService.removeItem(id);
  }
}
