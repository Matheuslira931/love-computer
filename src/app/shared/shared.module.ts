import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { IconModule } from './componets/icons/icon.module';

@NgModule({
  imports: [
    CommonModule,
    IconModule
  ],
  exports: [
    IconModule
  ]
})
export class SharedModule {}
