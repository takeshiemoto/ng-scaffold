import { Component } from '@angular/core';
import { CartService } from './cart.service';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.css'],
})
export class LayoutComponent {
  constructor(private readonly cartService: CartService) {}

  readonly itemCount$ = this.cartService.itemCount$;
}
