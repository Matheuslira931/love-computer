import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { AnnouncementRouting } from './announcement-routing.module';
import { AnnouncementComponent } from './announcement.component';
import { HeaderModule } from 'src/app/shared/componets/header/header.module';
import { IconModule } from 'src/app/shared/componets/icons/icon.module';


@NgModule({
  declarations: [
    AnnouncementComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forChild(AnnouncementRouting),
    HeaderModule,
    IconModule
  ]
})
export class AnnouncementModule { }
