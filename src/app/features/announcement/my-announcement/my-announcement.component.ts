import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { GlobalService } from 'src/app/core/services/global.service';
@Component({
  selector: 'app-my-announcement',
  templateUrl: './my-announcement.component.html',
  styleUrls: ['./my-announcement.component.scss']
})
export class MyAnnouncementComponent implements OnInit {

  public getInfoUser: any;
  public returnListAd: any[] = [];

  constructor(public router : Router, public globalService: GlobalService) { }

  ngOnInit(): void { 
    this.getInforUser();
    this.myAnnouncement();
  }

  myAnnouncement() {
    const idUser =  this.getInfoUser
    this.globalService.entityName = 'api/consultar-usuario/' + idUser;
    this.globalService.getResources().subscribe((response:any) => {
      this.returnListAd = response.anuncios.map((anuncio: any) => anuncio.anuncio);
      // if (response.anuncio.envia_todo_brasil == 1) {
      //   response.anuncio.envia_todo_brasil = 'Sim';
      // } else {
      //   response.anuncio.envia_todo_brasil = 'Não';
      // }
    });
  }

  getInforUser(): void  {
    const specificValue = localStorage.getItem('tokenUser');
    if(specificValue) {
      const parsedValue = JSON.parse(specificValue);
      if (parsedValue.usuario && parsedValue.usuario.length > 0) {
        this.getInfoUser = parsedValue.usuario[0].id;
      }
    }
  }

  goEditAd(id: number): void {
    this.globalService.entityName = 'api/exibir-anuncio/' + id;
    this.globalService.getResources().subscribe((response:any) => {
      localStorage.setItem('correntIdAd', response.anuncio.id);
      this.router.navigate(['/editar-anuncio/' + id]);
    });
  }

  deletAd(id: number): void {
    this.globalService.entityName = 'api/deletar-anuncio/' + id;
    this.globalService.deleteResource().subscribe((response:any) => {
      window.location.reload();
    });
  }

}
