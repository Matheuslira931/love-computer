import { HomeModule } from './features/home/home.module';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';

import { MatInputModule } from '@angular/material/input';

import { GlobalService } from './core/services/global.service';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    MatInputModule,
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    HomeModule,
    FormsModule,
    RouterModule.forRoot(AppRoutingModule)
  ],
  providers: [GlobalService],
  bootstrap: [AppComponent]
})
export class AppModule { }
