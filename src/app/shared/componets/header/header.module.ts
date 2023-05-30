import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatMenuModule } from '@angular/material/menu';
import { RouterModule } from '@angular/router';
import { ButtonsModule } from '../buttons/buttons.module';
import { IconModule } from '../icons/icon.module';
import { ModalModule } from '../modal/modal.module';
import { HeaderComponent } from './header.component';


@NgModule({
  declarations: [
    HeaderComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule,
    IconModule,
    ButtonsModule,
    ModalModule,
    MatMenuModule
  ],
  exports: [
    HeaderComponent
  ]
})
export class HeaderModule { }
