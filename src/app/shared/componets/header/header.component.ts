import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { GlobalService } from 'src/app/core/services/global.service';
import { ModalLoginComponent } from './modal-login/modal-login.component';
import { ModalSignComponent } from './modal-sign/modal-sign.component';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  public searchForm! : FormGroup;
  public userLogged:any;


  constructor(public router : Router, public globalService: GlobalService, public dialog: MatDialog) { }

  ngOnInit(): void {
    this.buildForm();
    this.getTokenUser();
  }

  getTokenUser() {
    if(localStorage.getItem('tokenUser')){
      this.userLogged = localStorage.getItem('tokenUser');
    }
  }

  buildForm() : void {
    this.searchForm = new FormGroup({
      inputSearch: new FormControl('', [Validators.required]),
    });
  }

  public search() {
    let request = {
      textoPesquisa: this.searchForm.get('inputSearch')?.value,
    }
    this.globalService.entityName = 'api/pesquisar-anuncio';
    this.globalService.createResource(request).subscribe({
      next: (response:any) => {
        console.log("deu ruim", request)
        return response
      },
      error: (response) => console.log("deu ruim", request)
    }
    );
  }

  openLogin(enterAnimationDuration: string, exitAnimationDuration: string) {
    const dialogRef = this.dialog.open(ModalLoginComponent, {
      enterAnimationDuration,
      exitAnimationDuration,
      panelClass: "dailog-login"
    });
  }

  openSign(enterAnimationDuration: string, exitAnimationDuration: string) {
    const dialogRef = this.dialog.open(ModalSignComponent, {
      enterAnimationDuration,
      exitAnimationDuration,
      panelClass: "dailog-sign"
    });
  }

  exit() {
    localStorage.clear();
    window.location.reload();
  }


}
