import { Component, OnInit } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { GlobalService } from 'src/app/core/services/global.service';

@Component({
  selector: 'app-announcement',
  templateUrl: './announcement.component.html',
  styleUrls: ['./announcement.component.scss']
})
export class AnnouncementComponent implements OnInit {

  public installment: any;
  public returnListAd: any[] = [];
  public imgReturn: any;


  constructor(private router: Router,  public globalService: GlobalService) { }

  ngOnInit(): void {
    this.allAnnouncement();
  }
  
  allAnnouncement() {
    this.globalService.entityName = 'api/exibir-anuncios';
    this.globalService.getResources().subscribe((response:any) => {
      // this.imgReturn = response.imagem.imagem;
      // console.log("aaaaa", this.imgReturn);
      this.returnListAd = response.map((anuncio: any) => anuncio.anuncio);
      if (response.anuncio.forma_pagamento === "credito") {
        this.installment = response.anuncio.forma_pagamento/12;
      }
    });
  }

  enterAd(): void {
    alert();
    this.router.navigate(['/your-route']);
  }

}
