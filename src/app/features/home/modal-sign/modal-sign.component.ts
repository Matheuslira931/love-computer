import { MatDialogRef } from '@angular/material/dialog';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-modal-sign',
  templateUrl: './modal-sign.component.html',
  styleUrls: ['./modal-sign.component.scss']
})
export class ModalSignComponent implements OnInit {


  hide = true;

  constructor() { }

  signForm = new FormGroup({
    inputEmail: new FormControl(''),
    inputPassword: new FormControl('')
  });

  get inputEmail() {
    return this.signForm.get('inputEmail');
  }

  get inputPassword() {
    return this.signForm.get('inputPassword');
  }

  ngOnInit(): void {
  }

}
