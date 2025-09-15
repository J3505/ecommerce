import { Component } from '@angular/core';
import { Producto } from '@model/Producto';
import { CartService } from '@service/cart/cart';
import { ProductoService } from '@service/productos/productos';

@Component({
  selector: 'app-pizza',
  imports: [],
  templateUrl: './pizza.html',
  styleUrl: './pizza.css'
})
export default class Pizza {
  productos: Producto[] = [];

    constructor(private productosService: ProductoService, private cart: CartService) {}

    ngOnInit() {
      this.productos = this.productosService.getProductos();
    }

    add(producto: Producto) {
      this.cart.addProduct(producto);
    }

}
