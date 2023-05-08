import { MatDialog } from '@angular/material/dialog';
import { Component, OnInit } from '@angular/core';
import { ModalLoginComponent } from './modal-login/modal-login.component';
import { ModalSignComponent } from './modal-sign/modal-sign.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {


  constructor(public dialog: MatDialog) {}

  openLogin(enterAnimationDuration: string, exitAnimationDuration: string) {
    const dialogRef = this.dialog.open(ModalLoginComponent, {
      enterAnimationDuration,
      exitAnimationDuration,
      panelClass: 'loginDailog'
    });
  }

  openSign(enterAnimationDuration: string, exitAnimationDuration: string) {
    const dialogRef = this.dialog.open(ModalSignComponent, {
      enterAnimationDuration,
      exitAnimationDuration,
      panelClass: 'signDailog'
    });
  }

  ngOnInit(): void {
  }

}
