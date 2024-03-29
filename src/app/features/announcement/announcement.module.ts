import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatTableModule } from '@angular/material/table';
import { MatTabsModule } from '@angular/material/tabs';
import { RouterModule } from '@angular/router';
import { ButtonsModule } from 'src/app/shared/componets/buttons/buttons.module';
import { CardModule } from 'src/app/shared/componets/card/card.module';
import { HeaderModule } from 'src/app/shared/componets/header/header.module';
import { IconModule } from 'src/app/shared/componets/icons/icon.module';
import { AnnouncementRouting } from './announcement-routing.module';
import { AnnouncementComponent } from './announcement.component';
import { MyAnnouncementComponent } from './my-announcement/my-announcement.component';
import { NewAnnouncementComponent } from './new-announcement/new-announcement.component';
import { ThisAnnouncementComponent } from './this-announcement/this-announcement.component';



@NgModule({
  declarations: [
    AnnouncementComponent,
    MyAnnouncementComponent,
    NewAnnouncementComponent,
    ThisAnnouncementComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forChild(AnnouncementRouting),
    HeaderModule,
    IconModule,
    CardModule,
    MatTabsModule,
    MatTableModule,
    MatCheckboxModule,
    ButtonsModule
  ]
})
export class AnnouncementModule { }
