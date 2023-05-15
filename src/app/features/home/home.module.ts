import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { RouterModule } from '@angular/router';
import { HomeRouting } from './home-routing.module';
import { HomeComponent } from './home.component';
import { ModalLoginComponent } from './modal-login/modal-login.component';
import { ModalSignComponent } from './modal-sign/modal-sign.component';

@NgModule({
  declarations: [
    HomeComponent,
    ModalLoginComponent,
    ModalSignComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MatInputModule,
    MatCardModule,
    MatButtonModule,
    MatDialogModule,
    MatFormFieldModule,
    MatIconModule,
    RouterModule.forChild(HomeRouting)
  ]
})
export class HomeModule { }
