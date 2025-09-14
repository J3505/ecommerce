import { Injectable } from '@angular/core';
import { Producto } from '@model/Producto';

@Injectable({
  providedIn: 'root'
})
export class ProductoService {

  private productos: Producto[] = [
    {
      id: 1,
      nombre: 'Pizza Margherita',
      descripcion: 'Tomate, mozzarella y albahaca fresca',
      cantidad: 1,
      precio: 12.99,
      imagen: 'https://i.pinimg.com/736x/ee/ea/85/eeea85c356e5a39bccba8fb3322d0d5a.jpg',
      favorito: false
    },
    {
      id: 2,
      nombre: 'Hamburguesa Clásica',
      descripcion: 'Carne jugosa, queso cheddar y lechuga fresca',
      cantidad: 1,
      precio: 9.99,
      imagen: 'https://i.pinimg.com/736x/ee/ea/85/eeea85c356e5a39bccba8fb3322d0d5a.jpg',
      favorito: false
    },
    {
      id: 3,
      nombre: 'Pollo Frito',
      descripcion: 'Crocante por fuera y jugoso por dentro',
      cantidad: 1,
      precio: 11.50,
      imagen: 'https://i.pinimg.com/736x/ee/ea/85/eeea85c356e5a39bccba8fb3322d0d5a.jpg',
      favorito: false
    },
    {
      id: 4,
      nombre: 'Tacos Mexicanos',
      descripcion: 'Tortillas con carne, cebolla y cilantro',
      cantidad: 1,
      precio: 8.75,
      imagen: 'https://i.pinimg.com/736x/ee/ea/85/eeea85c356e5a39bccba8fb3322d0d5a.jpg',
      favorito: false
    },
    {
      id: 5,
      nombre: 'Tacos Mexicanos',
      descripcion: 'Tortillas con carne, cebolla y cilantro',
      cantidad: 1,
      precio: 8.75,
      imagen: 'https://i.pinimg.com/736x/ee/ea/85/eeea85c356e5a39bccba8fb3322d0d5a.jpg',
      favorito: false
    },
    {
      id: 6,
      nombre: 'Tacos Mexicanos',
      descripcion: 'Tortillas con carne, cebolla y cilantro',
      cantidad: 1,
      precio: 8.75,
      imagen: 'https://i.pinimg.com/736x/ee/ea/85/eeea85c356e5a39bccba8fb3322d0d5a.jpg',
      favorito: false
    },
    {
      id: 7,
      nombre: 'Tacos Mexicanos',
      descripcion: 'Tortillas con carne, cebolla y cilantro',
      cantidad: 1,
      precio: 8.75,
      imagen: 'https://i.pinimg.com/736x/ee/ea/85/eeea85c356e5a39bccba8fb3322d0d5a.jpg',
      favorito: false
    },
    {
      id: 8,
      nombre: 'Tacos Mexicanos',
      descripcion: 'Tortillas con carne, cebolla y cilantro',
      cantidad: 1,
      precio: 8.75,
      imagen: 'https://i.pinimg.com/736x/ee/ea/85/eeea85c356e5a39bccba8fb3322d0d5a.jpg',
      favorito: false
    }
  ];

  getProductos(): Producto[] {
    return this.productos;
  }

}
