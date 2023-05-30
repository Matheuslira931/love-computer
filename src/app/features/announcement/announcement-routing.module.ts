import { Routes } from '@angular/router';
import { AnnouncementComponent } from './announcement.component';

export const AnnouncementRouting: Routes = [
  {
    path: '',
    component: AnnouncementComponent,
  },
  {
    path: 'meus-anuncios',
    component: AnnouncementComponent,
  }
];


