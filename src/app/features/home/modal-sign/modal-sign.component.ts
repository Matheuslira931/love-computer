import { MatDialogRef } from '@angular/material/dialog';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-modal-sign',
  templateUrl: './modal-sign.component.html',
  styleUrls: ['./modal-sign.component.scss']
})
export class ModalSignComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<ModalSignComponent>) { }

  signForm = new FormGroup({
    inputName: new FormControl('',)
  });

  get inputName() {
    return this.signForm.get('inputName');
  }

  ngOnInit(): void {
  }

}
