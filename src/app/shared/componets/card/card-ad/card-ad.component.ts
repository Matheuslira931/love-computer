import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-card-ad',
  templateUrl: './card-ad.component.html',
  styleUrls: ['./card-ad.component.scss']
})
export class CardAdComponent implements OnInit {

  @Input() imgCard: any;
  @Input() titleCard = '';
  @Input() priceCard = '';
  @Input() installmentCard = '';
  @Input() locationCard = '';
  @Input() regionCard = '';
  @Input() dateCard = '';
  @Input() tagCard= '';
  @Input() iconName:any;

  ngOnInit(): void {
    console.log('aaaa', this.imgCard); 
  }

  

}
