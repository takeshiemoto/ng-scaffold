import { Component, OnInit } from '@angular/core';

import { ProductService } from './product.service';
import { Product } from './entity';
import { CartService } from './cart.service';

@Component({
  selector: 'app-product-list-page',
  templateUrl: './product-list-page.component.html',
  styleUrls: ['./product-list-page.component.css'],
})
export class ProductListPageComponent implements OnInit {
  constructor(
    private readonly productService: ProductService,
    private readonly cartService: CartService
  ) {}

  readonly product$ = this.productService.products$;

  ngOnInit() {
    this.productService.getProducts();
  }

  addCart(item: Product) {
    this.cartService.addCart(item);
  }
}
