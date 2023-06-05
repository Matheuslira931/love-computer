import { Routes } from '@angular/router';
import { AnnouncementComponent } from './announcement.component';
import { EditProfileComponent } from './edit-profile/edit-profile.component';
import { MyAnnouncementComponent } from './my-announcement/my-announcement.component';
import { NewAnnouncementComponent } from './new-announcement/new-announcement.component';
import { ThisAnnouncementComponent } from './this-announcement/this-announcement.component';

export const AnnouncementRouting: Routes = [
  {
    path: '',
    component: AnnouncementComponent,
  },
  {
    path: 'meus-anuncios',
    component: MyAnnouncementComponent,
  },
  {
    path: 'novo-anuncio',
    component: NewAnnouncementComponent,
  },
  {
    path: 'editar-anuncio/:id',
    component: NewAnnouncementComponent,
  },
  {
    path: 'anuncio',
    component: ThisAnnouncementComponent,
  },
  {
    path: 'editar-perfil',
    component: EditProfileComponent,
  }
];


