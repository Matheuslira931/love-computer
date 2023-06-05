import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TagCardComponent } from './tag-card/tag-card.component';
import { IconModule } from '../icons/icon.module';



@NgModule({
  declarations: [
    TagCardComponent
  ],
  imports: [
    CommonModule,
    IconModule
  ],
  exports: [
    TagCardComponent
  ]
})
export class TagsModule { }
