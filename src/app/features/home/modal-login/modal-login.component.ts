import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-modal-login',
  templateUrl: './modal-login.component.html',
  styleUrls: ['./modal-login.component.scss']
})
export class ModalLoginComponent implements OnInit {

  hide = true;

  constructor() { }

  loginForm = new FormGroup({
    inputEmail: new FormControl(''),
    inputPassword: new FormControl('')
  });

  get inputEmail() {
    return this.loginForm.get('inputEmail');
  }

  get inputPassword() {
    return this.loginForm.get('inputPassword');
  }

  ngOnInit(): void {
  }

  logar() {

  }

}
