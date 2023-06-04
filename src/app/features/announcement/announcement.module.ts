import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatPseudoCheckboxModule } from '@angular/material/core';
import { MatTableModule } from '@angular/material/table';
import { MatTabsModule } from '@angular/material/tabs';
import { RouterModule } from '@angular/router';
import { CardModule } from 'src/app/shared/componets/card/card.module';
import { HeaderModule } from 'src/app/shared/componets/header/header.module';
import { IconModule } from 'src/app/shared/componets/icons/icon.module';
import { AnnouncementRouting } from './announcement-routing.module';
import { AnnouncementComponent } from './announcement.component';
import { MyAnnouncementComponent } from './my-announcement/my-announcement.component';



@NgModule({
  declarations: [
    AnnouncementComponent,
    MyAnnouncementComponent
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
    MatPseudoCheckboxModule
  ]
})
export class AnnouncementModule { }
