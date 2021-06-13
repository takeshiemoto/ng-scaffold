import { Injectable } from '@angular/core';
import { ComponentStore } from '@ngrx/component-store';
import { Product } from './entity';

export interface CartState {
  items: Product[];
}

@Injectable({
  providedIn: 'root',
})
export class CartService extends ComponentStore<CartState> {
  constructor() {
    super({ items: [] });
  }

  readonly items$ = this.select((state) => state.items);
  readonly itemCount$ = this.select((state) => state.items.length);

  private readonly addOne = this.updater((state, item: Product) => ({
    items: [...state.items, item],
  }));

  private readonly removeOne = this.updater((state, id: Product['id']) => ({
    items: state.items.filter((existItem) => existItem.id !== id),
  }));

  private readonly clearAll = this.updater(() => ({
    items: [],
  }));

  addCart(item: Product) {
    this.addOne(item);
  }

  removeItem(id: Product['id']) {
    this.removeOne(id);
  }

  clearCart() {
    this.clearAll();
  }
}
