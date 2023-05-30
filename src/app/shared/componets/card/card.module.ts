import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardAdComponent } from './card-ad/card-ad.component';



@NgModule({
  declarations: [
    CardAdComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    CardAdComponent
  ]
})
export class CardModule { }
