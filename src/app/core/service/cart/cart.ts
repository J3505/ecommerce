import { computed, Injectable, signal } from '@angular/core';
import { Producto } from '@model/Producto';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  private productsSignal = signal<Producto[]>([]);

  cartProducts$ = this.productsSignal.asReadonly();

  totalQuantity = computed(() =>
    this.cartProducts$().reduce((acc, p) => acc + p.cantidad, 0)
  );

  total = computed(() =>
    this.cartProducts$().reduce((acc, p) => acc + p.precio * p.cantidad, 0).toFixed(2)
  );

  addProduct(product: Producto) {
    const exists = this.cartProducts$().find((p) => p.id === product.id);

    if (exists) {
      this.productsSignal.update((items) =>
        items.map((p) =>
          p.id === product.id ? { ...p, cantidad: p.cantidad + 1 } : p
        )
      );
    } else {
      this.productsSignal.update((items) => [
        ...items,
        { ...product, quantity: 1 },
      ]);
    }
  }

  increaseQty(id: number) {
    this.productsSignal.update((items) =>
      items.map((p) => (p.id === id ? { ...p, cantidad: p.cantidad + 1 } : p))
    );
  }

  decreaseQty(id: number) {
    this.productsSignal.update((items) =>
      items.map((p) =>
        p.id === id && p.cantidad > 1 ? { ...p, cantidad: p.cantidad - 1 } : p
      )
    );
  }
  removeProduct(id: number) {
    this.productsSignal.update((items) => items.filter((p) => p.id !== id));
  }

  clearCart() {
    this.productsSignal.set([]);
  }

}
