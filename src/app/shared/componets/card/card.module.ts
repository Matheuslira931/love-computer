import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardAdComponent } from './card-ad/card-ad.component';
import { IconModule } from '../icons/icon.module';



@NgModule({
  declarations: [
    CardAdComponent
  ],
  imports: [
    CommonModule,
    IconModule
  ],
  exports: [
    CardAdComponent
  ]
})
export class CardModule { }
