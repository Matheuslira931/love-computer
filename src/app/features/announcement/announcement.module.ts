import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatTableModule } from '@angular/material/table';
import { MatTabsModule } from '@angular/material/tabs';
import { RouterModule } from '@angular/router';
import { NgxMaskModule } from "ngx-mask";
import { ButtonsModule } from 'src/app/shared/componets/buttons/buttons.module';
import { CardModule } from 'src/app/shared/componets/card/card.module';
import { HeaderModule } from 'src/app/shared/componets/header/header.module';
import { IconModule } from 'src/app/shared/componets/icons/icon.module';
import { TagsModule } from 'src/app/shared/componets/tags/tags.module';
import { AnnouncementRouting } from './announcement-routing.module';
import { AnnouncementComponent } from './announcement.component';
import { EditProfileComponent } from './edit-profile/edit-profile.component';
import { MyAnnouncementComponent } from './my-announcement/my-announcement.component';
import { NewAnnouncementComponent } from './new-announcement/new-announcement.component';
import { ThisAnnouncementComponent } from './this-announcement/this-announcement.component';



@NgModule({
  declarations: [
    AnnouncementComponent,
    MyAnnouncementComponent,
    NewAnnouncementComponent,
    ThisAnnouncementComponent,
    EditProfileComponent
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
    ButtonsModule,
    MatInputModule,
    MatFormFieldModule,
    MatSelectModule,
    TagsModule,
    MatIconModule,
    NgxMaskModule.forRoot()
  ]
})
export class AnnouncementModule { }
