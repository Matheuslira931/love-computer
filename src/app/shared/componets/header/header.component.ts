import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { GlobalService } from 'src/app/core/services/global.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  public searchForm! : FormGroup;

  constructor(public router : Router, public globalService: GlobalService) { }

  ngOnInit(): void {
    this.buildForm();
  }

  buildForm() : void {
    this.searchForm = new FormGroup({
      inputSearch: new FormControl('', [Validators.required]),
    });
  }

  public search() {
    let request = {
      textoPesquisa: this.searchForm.get('inputSearch')?.value,
    }
    this.globalService.entityName = 'api/pesquisar-anuncio';
    this.globalService.createResource(request).subscribe({
      next: (response:any) => {
        console.log("deu ruim", request)
        return response
      },
      error: (response) => console.log("deu ruim", request)
    }
    );
  }

  exit() {
    this.router.navigateByUrl('/');
  }


}
