import { MatDialog } from '@angular/material/dialog';
import { Component, OnInit } from '@angular/core';
import { ModalLoginComponent } from 'src/app/shared/componets/modal/modal-login/modal-login.component';
import { ModalSignComponent } from 'src/app/shared/componets/modal/modal-sign/modal-sign.component';

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
<<<<<<< HEAD
      panelClass: "dailog-login"
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
=======
      panelClass: 'loginDailog'
>>>>>>> master
    });
  }

  openSign(enterAnimationDuration: string, exitAnimationDuration: string) {
    const dialogRef = this.dialog.open(ModalSignComponent, {
      enterAnimationDuration,
      exitAnimationDuration,
<<<<<<< HEAD
      panelClass: "dailog-sign"
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
=======
      panelClass: 'signDailog'
>>>>>>> master
    });
  }

  ngOnInit(): void {
  }

}
