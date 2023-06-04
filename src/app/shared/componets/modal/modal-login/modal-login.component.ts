import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { GlobalService } from '../../../../core/services/global.service';

@Component({
  selector: 'app-modal-login',
  templateUrl: './modal-login.component.html',
  styleUrls: ['./modal-login.component.scss']
})
export class ModalLoginComponent implements OnInit{

  hide = true;
  public loginForm! : FormGroup;

  constructor(public router : Router, public globalService: GlobalService, public dialog: MatDialog) { }

  ngOnInit(): void {
    this.buildForm();
  }

  redirect_auth() {
    this.dialog.closeAll();
    this.router.navigate(['/auth']);
  }


  buildForm() : void {
    this.loginForm = new FormGroup({
      inputEmail: new FormControl('', [Validators.required]),
      inputPassword: new FormControl('', [Validators.required])
    });
  }

  public logar() {
    let request = {
      email: this.loginForm.get('inputEmail')?.value,
      senha: this.loginForm.get('inputPassword')?.value,
    }
    this.globalService.entityName = 'api/login';
    this.globalService.createResource(request).subscribe({
      next: (response:any) => {
        let getResponse = {
          token: response.token,
          user: response.usuario[0].id
        };
        localStorage.setItem("tokenUser", JSON.stringify(getResponse));
        this.dialog.closeAll();
        this.router.navigateByUrl('/anuncios');
      },
      error: (response) => console.log("deu ruim", request),
    }
    );
  }

  logar() {

  }

}
