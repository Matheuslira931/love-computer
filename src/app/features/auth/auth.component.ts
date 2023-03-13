import { ModalLoginComponent } from './modal-login/modal-login.component';
import { ModalSignComponent } from './modal-sign/modal-sign.component';

import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss']
})
export class AuthComponent implements OnInit {

  constructor(public dialog: MatDialog) {}

  modalLogin(enterAnimationDuration: string, exitAnimationDuration: string): void {
    this.dialog.open(ModalLoginComponent, {
      width: "750px",
      enterAnimationDuration,
      exitAnimationDuration,
    });
  }
  modalSign(enterAnimationDuration: string, exitAnimationDuration: string): void {
    this.dialog.open(ModalSignComponent, {
      width: "750px",
      enterAnimationDuration,
      exitAnimationDuration,
    });
  }

  ngOnInit(): void {
  }

}
