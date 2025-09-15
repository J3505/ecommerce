import { Routes } from "@angular/router";

export default [
  { path: 'list', loadComponent: () => import('./list/list')  },
  { path: 'pizza', loadComponent: () => import('./category/pizza/pizza') },
  // { path: ':id',     loadComponent: () => import('./detail/detail')  }
] as Routes;

// ng g c products/category/<nameToCreate>
