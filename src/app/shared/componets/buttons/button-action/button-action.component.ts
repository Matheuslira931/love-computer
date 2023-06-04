import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-button-action',
  templateUrl: './button-action.component.html',
  styleUrls: ['./button-action.component.scss']
})
export class ButtonActionComponent{

  @Input() content:any;
  @Input() editStyle:any;

}
