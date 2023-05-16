import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { GlobalService } from './../../../../core/services/global.service';


@Component({
  selector: 'app-modal-sign',
  templateUrl: './modal-sign.component.html',
  styleUrls: ['./modal-sign.component.scss']
})
export class ModalSignComponent implements OnInit {

  hide = true;
  public signForm! : FormGroup;

  constructor(public router : Router, public globalService: GlobalService, public dialog: MatDialog) { }

  ngOnInit(): void {
    this.buildForm();
  }

  redirect_auth() {
    this.dialog.closeAll();
    this.router.navigate(['/auth']);
  }

  buildForm() : void {
    this.signForm = new FormGroup({
      inputName: new FormControl('', [Validators.required]),
      inputLastName: new FormControl('', [Validators.required]),
      inputEmail: new FormControl('', [Validators.required]),
      inputSex: new FormControl('', [Validators.required]),
      inputBirthday: new FormControl('', [Validators.required]),
      inputPhone: new FormControl('', [Validators.required]),
      inputCity: new FormControl('', [Validators.required]),
      inputState: new FormControl('', [Validators.required]),
      inputNeighbourhood: new FormControl('', [Validators.required]),
      inputPassword: new FormControl('', [Validators.required])
    });
  }

  public cadastrar() {
    let request = {
      nome: this.signForm.get('inputName')?.value,
      sobrenome: this.signForm.get('inputLastName')?.value,
      email: this.signForm.get('inputEmail')?.value,
      sexo: this.signForm.get('inputSex')?.value,
      data_nascimento: this.signForm.get('inputBirthday')?.value,
      telefone: this.signForm.get('inputPhone')?.value,
      cidade: this.signForm.get('inputCity')?.value,
      estado: this.signForm.get('inputState')?.value,
      bairro: this.signForm.get('inputNeighbourhood')?.value,
      senha: this.signForm.get('inputPassword')?.value,
    }
    this.globalService.entityName = 'api/criar-usuario';
    this.globalService.createResource(request).subscribe({
      next: (response:any) => {
        localStorage.setItem("token", response.token);
        this.dialog.closeAll();
        this.router.navigateByUrl('/anuncios');
      },
      error: (response) => console.log("deu ruim", request),
    }
    );
  }

}
