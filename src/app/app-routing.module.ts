import {  Routes } from '@angular/router';

export const AppRoutingModule: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./features/home/home.component').then(m => m.HomeComponent)
  },
];
