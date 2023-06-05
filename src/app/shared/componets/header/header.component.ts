import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { GlobalService } from 'src/app/core/services/global.service';
import { ModalLoginComponent } from '../modal/modal-login/modal-login.component';
import { ModalSignComponent } from '../modal/modal-sign/modal-sign.component';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  public searchForm! : FormGroup;
  public userLogged:any;
  @Output() methodName = new EventEmitter<any>();

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
    if (this.searchForm.get('inputSearch')?.value.length > 2) {
      this.globalService.entityName = `api/pesquisar-anuncio?textoPesquisa=${this.searchForm.get('inputSearch')?.value}`;
      this.globalService.getResources().subscribe({
        next: (response:any) => {
          console.log("deu rbom")
          this.methodName.emit(response);
        },
        error: (response) => console.log("deu ruim")
      });
    }
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

  goEditProfile() {
    this.router.navigate(['/editar-perfil']);
  }

  exit() {
    localStorage.removeItem('tokenUser');
    localStorage.removeItem('onlyToken');
    this.router.navigate(['/auth']);
  }


}
