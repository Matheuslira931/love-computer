import { GlobalService } from './../../../core/services/global.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';

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
    console.log('entrou na função', request)
    this.globalService.entityName = 'api/login';
    this.globalService.createResource(request).subscribe({
      next: (response:any) => {
        localStorage.setItem("token", response.token);
        this.dialog.closeAll();
        this.router.navigateByUrl('/ovo');
      },
      error: (response) => console.log("deu ruim", request),
    }
    );
  }

  logar() {

  }

}
