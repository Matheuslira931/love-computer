
import { HttpClient } from '@angular/common/http';
import { Injectable, NgZone } from '@angular/core';

import { BaseService } from './base.service';

@Injectable({
  providedIn: 'root'
})
export class GlobalService extends BaseService {

  constructor(
    public override http: HttpClient,
    public zone: NgZone) {
    super(http);
  };

  public save(data:any = null) {
    if (data.id) {
      return this.updateResource(data)
    }
    else {
      return this.createResource(data);
    }
  }

}
