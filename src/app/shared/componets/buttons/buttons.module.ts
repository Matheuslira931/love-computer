import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { IconModule } from '../icons/icon.module';
import { ButtonBackgroundComponent } from './button-background/button-background.component';
import { ButtonActionComponent } from './button-action/button-action.component';


@NgModule({
  declarations: [
    ButtonBackgroundComponent,
    ButtonActionComponent
  ],
  imports: [
    CommonModule,
    IconModule
  ],
  exports: [
    ButtonBackgroundComponent,
    ButtonActionComponent
  ]
})
export class ButtonsModule { }
