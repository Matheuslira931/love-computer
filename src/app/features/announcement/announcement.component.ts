import { Component, OnInit } from '@angular/core';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-announcement',
  templateUrl: './announcement.component.html',
  styleUrls: ['./announcement.component.scss']
})
export class AnnouncementComponent implements OnInit {

  public priceAd = 250;
  public installment = this.priceAd/12;

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  enterAd(): void {
    alert();
    this.router.navigate(['/your-route']);
  }

}
