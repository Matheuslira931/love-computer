import {  Routes } from '@angular/router';

export const AppRoutingModule: Routes = [
  {
    path: '',
    loadChildren: () => import('./features/auth/auth.component').then(m => m.AuthComponent)
  },
];
