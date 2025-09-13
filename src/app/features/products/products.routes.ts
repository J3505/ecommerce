import { Routes } from "@angular/router";

export default [
  {
    path: 'list',
    loadComponent: () => import('./list/list')
  },
  {
    path: ':id',
    loadComponent: () => import('./detail/detail')
  }
] as Routes;

