import { Injectable } from '@angular/core';
import { ComponentStore } from '@ngrx/component-store';

interface Product {
  id: string;
  name: string;
}

export interface ProductState {
  products: Product[];
}

@Injectable({
  providedIn: 'root',
})
export class ProductService extends ComponentStore<ProductState> {
  constructor() {
    super({ products: [] });
  }

  readonly products$ = this.select((state) => state.products);

  readonly setProducts = this.updater((_, products: Product[]) => ({
    products: products,
  }));

  getProducts(): void {
    this.setProducts([{ id: 'x', name: 'Clean Coder' }]);
  }
}
