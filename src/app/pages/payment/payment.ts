import { Component, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { CartService } from '@service/cart/cart';

@Component({
  selector: 'app-payment',
  imports: [RouterLink],
  template: `
    <div class="bg-gray-50 font-sans">
      <div class="max-w-md mx-auto bg-white min-h-screen">
        <!-- Header -->
        <div class="flex items-center justify-between p-4 border-b border-gray-200">
          <button class="p-2 hover:bg-gray-100 rounded-full" routerLink="../dashboard/list">
            <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M15 19l-7-7 7-7"
              ></path>
            </svg>
          </button>
          <h1 class="text-lg font-semibold text-gray-900">Pago</h1>
          <div class="w-10"></div>
        </div>

        <!-- Order Summary -->
        <div class="p-4 bg-gray-50 border-b border-gray-200">
          <div class="flex justify-between items-center mb-2">
            <span class="text-sm text-gray-600">Total del pedido</span>
            <span class="text-lg font-bold text-gray-900">S/ {{ pagosTotal() }}</span>
          </div>
          <div class="flex justify-between items-center text-sm text-gray-500">
            <span>{{ cantidadPedidos() }} productos</span>
            <button class="text-primary hover:text-primary-dark">Ver detalles</button>
          </div>
        </div>

        <!-- Payment Methods -->
        <div class="p-4">
          <h2 class="text-base font-semibold text-gray-900 mb-4">Método de pago</h2>

          <!-- Digital Wallet -->
          <label
            class="flex items-center p-4 border border-gray-200 rounded-lg cursor-pointer hover:border-primary mb-3"
          >
            <input type="radio" name="payment" value="wallet" class="w-4 h-4 text-primary" />
            <div class="ml-3 flex-1">
              <div class="flex items-center">
                <svg class="w-6 h-6 mr-2" viewBox="0 0 24 24" fill="none">
                  <path
                    d="M21 8V6a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-2"
                    stroke="currentColor"
                    stroke-width="2"
                  />
                  <path d="M21 12a4 4 0 0 1-4 4H7" stroke="currentColor" stroke-width="2" />
                  <circle cx="17" cy="12" r="2" stroke="currentColor" stroke-width="2" />
                </svg>
                <span class="font-medium text-gray-900">Billetera digital</span>
              </div>
              <p class="text-sm text-gray-500 mt-1">Saldo disponible: S/ 125.50</p>
            </div>
          </label>

          <!-- Cash on Delivery -->
          <label
            class="flex items-center p-4 border border-gray-200 rounded-lg cursor-pointer hover:border-primary mb-6"
          >
            <input type="radio" name="payment" value="cash" class="w-4 h-4 text-primary" />
            <div class="ml-3 flex-1">
              <div class="flex items-center">
                <svg class="w-6 h-6 mr-2" viewBox="0 0 24 24" fill="none">
                  <path
                    d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"
                    stroke="currentColor"
                    stroke-width="2"
                  />
                </svg>
                <span class="font-medium text-gray-900">Pago contra entrega</span>
              </div>
              <p class="text-sm text-gray-500 mt-1">Paga en efectivo al recibir tu pedido</p>
            </div>
          </label>
        </div>

        <!-- Delivery Address -->
        <div class="p-4 border-t border-gray-200">
          <h3 class="text-base font-semibold text-gray-900 mb-3">Dirección de entrega</h3>
          <div class="flex items-start p-3 bg-gray-50 rounded-lg">
            <svg
              class="w-5 h-5 mt-0.5 mr-3 text-gray-400"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
              ></path>
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
              ></path>
            </svg>
            <div class="flex-1">
              <p class="font-medium text-gray-900">Mi Casa</p>
              <p class="text-sm text-gray-600">Av. Principal 123, San Isidro</p>
              <p class="text-sm text-gray-600">Lima, Perú</p>
            </div>
            <button class="text-primary hover:text-primary-dark text-sm font-medium">
              Cambiar
            </button>
          </div>
        </div>

        <!-- Order Summary Details -->
        <div class="p-4 border-t border-gray-200">
          <div class="space-y-2 text-sm">
            <div class="flex justify-between">
              <span class="text-gray-600">Subtotal</span>
              <span class="text-gray-900">S/ {{ pagosTotal() }}</span>
            </div>
            <div class="flex justify-between">
              <span class="text-gray-600">Delivery</span>
              <span class="text-gray-900">S/ 5.00</span>
            </div>
            <div class="flex justify-between">
              <span class="text-gray-600">Descuento</span>
              <span class="text-green-600">-S/ 0.00</span>
            </div>
            <hr class="my-2" />
            <div class="flex justify-between font-semibold text-base">
              <span class="text-gray-900">Total</span>
              <span class="text-gray-900">S/ {{ pagosTotal() }}</span>
            </div>
          </div>
        </div>

        <!-- Pay Button -->
        <div class="p-4">
          <button
            class="w-full bg-amber-600 hover:bg-amber-700 text-white font-semibold py-4 px-6 rounded-lg transition-colors duration-200 flex items-center justify-center"
          >
            <svg class="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
              ></path>
            </svg>
            Pagar S/ {{ pagosTotal() }}
          </button>
          <p class="text-xs text-gray-500 text-center mt-2">
            Al continuar, aceptas nuestros términos y condiciones
          </p>
        </div>
      </div>
    </div>
  `,
  styleUrl: './payment.css',
})
export class Payment {
  cart = inject(CartService);

  pagosTotal() {
    // this.cart.total();
    return this.cart.total();
  }

  cantidadPedidos() {
    return this.cart.totalQuantity();
  }
}
