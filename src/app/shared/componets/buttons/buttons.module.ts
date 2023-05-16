import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { IconModule } from '../icons/icon.module';
import { ButtonBackgroundComponent } from './button-background/button-background.component';


@NgModule({
  declarations: [
    ButtonBackgroundComponent
  ],
  imports: [
    CommonModule,
    IconModule
  ],
  exports: [
    ButtonBackgroundComponent
  ]
})
export class ButtonsModule { }
