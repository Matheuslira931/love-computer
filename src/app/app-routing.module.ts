import { Routes } from '@angular/router';
import { AppComponent } from './app.component';

export const AppRoutingModule: Routes = [
  {
    path: '',
    component: AppComponent,
    children: [
      {
        path: 'home',
        loadChildren: () => import('./features/home/home.module').then((m) => m.HomeModule),
      },
      {
        path: 'anuncios',
        loadChildren: () => import('./features/announcement/announcement.module').then((m) => m.AnnouncementModule),
      },
  ]}
];
