import { Routes } from '@angular/router';
import { AUTH_ROUTES } from './features/auth/auth.routes';
import { Dashboard } from './pages/dashboard/dashboard';
import { Payment } from './pages/payment/payment';
// import { PRODUCTS_ROUTES } from './features/products/products.routes';

export const routes: Routes = [
  { path: '', children: AUTH_ROUTES },

  { path: 'dashboard',
    component: Dashboard,
    children:[
      { path: '', loadChildren: () => import ('./features/products/products.routes') },
    ]
  },

  { path: 'pagos', component: Payment },

  { path: '**', redirectTo: '' }
];
