import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-button-background',
  templateUrl: './button-background.component.html',
  styleUrls: ['./button-background.component.scss']
})
export class ButtonBackgroundComponent implements OnInit {

  @Input() content:any;
  @Input() iconType:any;
  @Input() iconName:any;
  @Input() hRef:any;
  @Input() editStyle:any;

  constructor() { }

  ngOnInit(): void {
  }

}
