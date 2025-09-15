import { Component, EventEmitter, inject, Output } from '@angular/core';
import { TableModule } from 'primeng/table';
import { ButtonModule } from 'primeng/button';
import { InputNumber } from 'primeng/inputnumber';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { CartService } from '@service/cart/cart';


@Component({
  selector: 'app-cart',
  imports: [TableModule, ButtonModule, InputNumber, FormsModule, RouterLink],
  template: `
  <div class="max-w-5xl mx-auto p-6 bg-white shadow rounded-2xl">
  @if (cart.cartProducts$().length > 0) {
  <p-table [value]="cart.cartProducts$()" responsiveLayout="scroll" styleClass="p-datatable-sm">
    <ng-template pTemplate="header">
      <tr>
        <th class="text-left">Plato</th>
        <th class="text-right">Precio</th>
        <th class="text-center">Cantidad</th>
        <th class="text-right">Subtotal</th>
        <th></th>
      </tr>
    </ng-template>

    <ng-template pTemplate="body" let-producto>
      <tr>
        <!-- Nombre + imagen -->
        <td class="flex items-center gap-3">
          <img
            [src]="producto.imagen"
            [alt]="producto.nombre"
            class="w-12 h-12 object-cover rounded-md border"
          />
          <span class="font-medium text-gray-800">{{ producto.nombre }}</span>
        </td>

        <!-- Precio unitario -->
        <td class="text-right">S/ {{ producto.precio }}</td>

        <!-- Controles de cantidad -->
        <td class="flex items-center justify-center gap-2">
          <p-button
            icon="pi pi-minus"
            (click)="decrease(producto.id)"
            styleClass="p-button-rounded p-button-text p-button-secondary"
            [disabled]="producto.cantidad === 1"
            ariaLabel="Disminuir cantidad"
          ></p-button>

          <p-inputnumber
            [ngModel]="producto.cantidad"
            readonly="true"
            inputStyleClass="w-16 text-center font-semibold"
          ></p-inputnumber>

          <p-button
            icon="pi pi-plus"
            (click)="increase(producto.id)"
            styleClass="p-button-rounded p-button-text p-button-success"
            ariaLabel="Aumentar cantidad"
          ></p-button>
        </td>

        <!-- Subtotal -->
        <td class="text-right font-semibold text-gray-800">
          S/ {{ producto.precio * producto.cantidad }}
        </td>

        <!-- Eliminar -->
        <td class="text-center">
          <p-button
            icon="pi pi-trash"
            severity="danger"
            (click)="remove(producto.id)"
            styleClass="p-button-rounded p-button-text"
            ariaLabel="Eliminar producto"
          ></p-button>
        </td>
      </tr>
    </ng-template>
  </p-table>

  <!-- Total como botón -->
  <div class="mt-8 border-t pt-6">
    <button
      routerLink="/pagos"
      class="w-full flex items-center justify-between bg-orange-600 hover:bg-orange-700 text-white px-6 py-4 rounded-lg shadow text-xl font-bold transition"
    >
      <span class="flex items-center gap-2">
        <i class="fas fa-credit-card"></i>
        Pagar
      </span>
      <span>S/ {{ cart.total() }}</span>
    </button>
  </div>

  } @else {
  <div class="text-center py-12 text-gray-500">
    🛍️ Tu carrito está vacío <br />
    <a routerLink="/pagos" class="text-orange-500 hover:underline"> Ver menú </a>
  </div>
  }
</div>
  `,
})
export class Cart {
  cart = inject(CartService);

  @Output() totalQuantityChange = new EventEmitter<number>();

  ngDoCheck() {
    this.totalQuantityChange.emit(this.cart.totalQuantity());
  }

  increase(id: number){
    this.cart.increaseQty(id)
  }

  decrease(id: number){
    this.cart.decreaseQty(id)
  }

  remove(id: number){
    this.cart.removeProduct(id)
  }

}
