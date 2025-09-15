export interface Producto {
  id: number;
  nombre: string;
  cantidad: number;
  descripcion: string;
  precio: number;
  imagen: string;
  favorito?: boolean;
  // estado?: boolean;
  // categoriaId?: number;
}
