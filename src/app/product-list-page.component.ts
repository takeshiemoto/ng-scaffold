import { Component, OnInit } from '@angular/core';

import { ProductService } from './product.service';

@Component({
  selector: 'app-product-list-page',
  templateUrl: './product-list-page.component.html',
  styleUrls: ['./product-list-page.component.css'],
  providers: [ProductService],
})
export class ProductListPageComponent implements OnInit {
  constructor(private readonly productService: ProductService) {}

  readonly product$ = this.productService.products$;

  ngOnInit() {
    this.productService.getProducts();
  }
}
