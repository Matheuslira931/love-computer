
import { Routes } from '@angular/router';

import { AuthComponent } from './auth.component';

export const AuthRouting: Routes = [
  {
    path: '',
    component: AuthComponent,
    children: [

    ]
  }
];
