import { Component, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { GlobalService } from 'src/app/core/services/global.service';
import { productTip } from './../../../shared/interface/productTip';
import { shipping } from './../../../shared/interface/shipping';

@Component({
  selector: 'app-new-announcement',
  templateUrl: './new-announcement.component.html',
  styleUrls: ['./new-announcement.component.scss']
})
export class NewAnnouncementComponent implements OnInit {

  public newAdForm! : FormGroup;
  public getInfoUser: any;
  public getAD: any;
  public selectedTipoAd: string = '';
  public selectedTipoComponent: string = '';
  public selectedTipPaymant: string = '';
  public selectedSituation: string = '';
  public selectedSedex: boolean = false;
  public imgURL: any;

  @Input() namaBtn = '';

  ownerTips: productTip[] = [
    {value: 'vendendo', viewValue: 'Estou vendendo'},
    {value: 'comprando', viewValue: 'Estou comprando'},
  ];

  productTips: productTip[] = [
    {value: 'perife', viewValue: 'periféricos'},
    {value: 'comp.intr', viewValue: 'Componentes internos'},
    {value: 'lapt.desk', viewValue: 'Computador/Notebook'},
  ];

  componentCondicionals: productTip[] = [
    {value: 'novo', viewValue: 'Novo'},
    {value: 'seminovo', viewValue: 'Semi-novo'}
  ];

  payments: productTip[] = [
    {value: 'pix', viewValue: 'Pix/Debito'},
    {value: 'dinheiro', viewValue: 'à vista'},
    {value: 'credito', viewValue: 'Cartão de crédito'},
    {value: 'tudo', viewValue: 'Todos'},
  ];

  sedexs: shipping[] = [
    {value: true, viewValue: 'Sim'},
    {value: false, viewValue: 'Não'},
  ];
  constructor(public router : Router, public globalService: GlobalService) { }

  ngOnInit(): void {
    this.buildForm();
    this.getInforUser();
    this.verifyRote();
  }

  verifyRote() {
    const currentUrl = this.router.url;
    const currentIdAd = localStorage.getItem('correntIdAd')
    if (currentUrl === '/editar-anuncio/'+ currentIdAd) {
      this.namaBtn = 'Editar Anuncio';
      this.globalService.entityName = 'api/exibir-anuncio/' + currentIdAd;
      this.globalService.getResources().subscribe((response: any) => {
        this.getAD = response.anuncio;
        this.newAdForm.patchValue({
          inputTitle: response.anuncio.nome,
          inputDescription: response.anuncio.descricao,
          inpuPrice: response.anuncio.preco,
          inputCompState: response.anuncio.estado_componente,
          inputCompTip: response.anuncio.tipo_componente,
          inputOwnTip: response.anuncio.tipo_anuncio,
          inputPayment: response.anuncio.forma_pagamento,
          inputSedex: response.anuncio.envia_todo_brasil,
          inputEstado: response.anuncio.estado,
          inputCidade: response.anuncio.cidade
        });
        
        console.log("peguei tudo", this.getAD);
      });
    }else {
      this.namaBtn = 'Criar Anuncio';
    }
  }

  getInforUser() {
    const specificValue = localStorage.getItem('tokenUser');
    if(specificValue) {
      const parsedValue = JSON.parse(specificValue);
      if (parsedValue.usuario && parsedValue.usuario.length > 0) {
        this.getInfoUser = parsedValue.usuario[0].id;
      }
    }
  }

  buildForm() {
    this.newAdForm = new FormGroup({
      inputTitle: new FormControl('', [Validators.required]),
      inputDescription: new FormControl('', [Validators.required]),
      inpuPrice: new FormControl('', [Validators.required]),
      inputCompState: new FormControl('', [Validators.required]),
      inputImage: new FormControl(''),
      inputCompTip: new FormControl('', [Validators.required]),
      inputOwnTip: new FormControl('', [Validators.required]),
      inputPayment: new FormControl('', [Validators.required]),
      inputSedex: new FormControl(Boolean, [Validators.required]),
      inputEstado: new FormControl('', [Validators.required]),
      inputCidade: new FormControl('', [Validators.required])
    });
  }

  preview(files: any) {
    var reader = new FileReader();
    reader.readAsDataURL(files[0]);
    reader.onload = (_event) => {
      this.imgURL = files[0];
      console.log("aaaaaaaaa", this.imgURL);
    };
  }

  public newAd(): void {
    // let formData = new FormData();
    // formData.append('imagens', this.imgURL);
    // formData.append('nome',this.newAdForm.get('inputTitle')?.value);
    // formData.append('tipo_anuncio',this.newAdForm.get('inputOwnTip')?.value);
    // formData.append('tipo_componente',this.newAdForm.get('inputCompTip')?.value),
    // formData.append('modelo','modelito'),
    // formData.append('urgencia','tranquilo'),
    // formData.append('estado_componente', this.newAdForm.get('inputCompState')?.value),
    // formData.append('preco', this.newAdForm.get('inpuPrice')?.value),
    // formData.append('forma_pagamento', this.newAdForm.get('inputPayment')?.value),
    // formData.append('usuario_id',this.getInfoUser),
    // formData.append('descricao',this.newAdForm.get('inputDescription')?.value),
    // formData.append('envia_todo_brasil',this.newAdForm.get('inputSedex')?.value),
    // formData.append('estado', this.newAdForm.get('inputEstado')?.value),
    // formData.append('cidade', this.newAdForm.get('inputCidade')?.value)
    let request = {
      nome: this.newAdForm.get('inputTitle')?.value,
      tipo_anuncio: this.newAdForm.get('inputOwnTip')?.value,
      tipo_componente: this.newAdForm.get('inputCompTip')?.value,
      modelo: 'modelito',
      urgencia: 'tranquilo',
      estado_componente: this.newAdForm.get('inputCompState')?.value,
      preco: this.newAdForm.get('inpuPrice')?.value,
      forma_pagamento: this.newAdForm.get('inputPayment')?.value,
      usuario_id: this.getInfoUser,
      descricao: this.newAdForm.get('inputDescription')?.value,
      envia_todo_brasil: this.newAdForm.get('inputSedex')?.value,
      cidade: this.newAdForm.get('inputEstado')?.value,
      estado: this.newAdForm.get('inputCidade')?.value
      // imagens: [this.imgURL]
    }
    const currentUrl = this.router.url;
    const currentIdAd = localStorage.getItem('correntIdAd')
    if(currentUrl === '/editar-anuncio/'+ currentIdAd){
      this.globalService.entityName = 'api/atualizar-anuncio/' + currentIdAd;
      this.globalService.updateResource(request).subscribe({
        next: (response:any) => {
          console.log("deu bom", request);
          this.router.navigateByUrl('/meus-anuncios');
        },
        error: (response) => console.log("deu ruim", request),
      });
    }else {
      this.globalService.entityName = 'api/criar-anuncio';
      this.globalService.createResource(request).subscribe({
        next: (response:any) => {
          console.log("deu bom", request);
          this.router.navigateByUrl('/anuncios');
        },
        error: (response) => console.log("deu ruim", request),
      });
    }
  }

}
