import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-tag-card',
  templateUrl: './tag-card.component.html',
  styleUrls: ['./tag-card.component.scss']
})
export class TagCardComponent implements OnInit {

  
  @Input() tagCard= '';
  @Input() iconName:any;
  
  constructor() { }

  ngOnInit(): void {
  }

}
