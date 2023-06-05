import { environment } from './../../../environments/environment';
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable } from "rxjs";


export class BaseService {
  protected host: string = environment.apiUrl;
  public entityName:any;
  protected token = sessionStorage.getItem("token");

  constructor(public http: HttpClient) { }

  protected headers(isFormData = false, extraOptions:any = {}): HttpHeaders {

    let result: any = {
      "Content-Type": "application/json",
      "Accept": "application/json",
      "Access-Control-Allow-Origin": "*",
    };

    if (isFormData) {
      result = {
        "Accept": "application/json",
        "Access-Control-Allow-Origin": "*",
      };
    }

    this.token = localStorage.getItem("onlyToken");

    if (this.token) {
      const parsedValue = JSON.parse(this.token);
      result.Authorization = "Bearer " + parsedValue;
    }

    for (const key in extraOptions) {
      result[key] = extraOptions[key];
    }
    return new HttpHeaders(result);
  }

  private options(isFormData = false, extraOptions = {}): any {
    const headerOptions = this.headers(isFormData, extraOptions);
    return { headers: headerOptions };
  }

  private optionsWithoutToken(isFormData = false): any {
    const headerOptions = this.headers(isFormData);
    return { headers: headerOptions };
  }

  getResources(params:any = {}) {
    return this.http.get(this.resourceUrl(null, params), this.options());
  }

  getResource(id:any, position = null, params = {}) {
    return this.http.get(this.resourceUrl(id, position, params), this.options());
  }

  createResource(data:any, params:any = {}, extraOptions: any = {}) {

    let isFormData = false;
    
    if (data instanceof FormData) {
      isFormData = true;
    }

    return this.http.post(
      this.resourceUrl(null, params),
      data,
      this.options(isFormData, extraOptions)
    );
  }

  upload(formData:any) {
    return this.http.post(`${this.host}/${this.entityName}`, formData, {
      reportProgress: true,
      observe: "events",
      headers: this.headers(true),
    });
  }

  updateResource(data:any, params:any = {}) {
    let isFormData = data instanceof FormData;
    return this.http.put(
      this.resourceUrl(data.id, params),
      data,
      this.options(isFormData)
    );
  }

  patchResource(data:any, params:any = {}) {
    return this.http.patch(
      this.resourceUrl(data.id, params),
      data,
      this.options(false)
    );
  }

  patchResourceDynamic(id = null, body:any, position:any, params = {}, extraOptions = {}) {
    extraOptions = {
      "Content-Type": "application/merge-patch+json"
    }
    return this.http.patch(
      this.resourceUrl(id, position, params),
      body,
      { headers: this.headers(false, extraOptions) }
    );
  }

  patchResourceWithoutToken(data:any, params:any = {}) {
    return this.http.patch(
      this.resourceUrl(data.id, params),
      data,
      this.optionsWithoutToken(false)
    );
  }

  deleteResource(id = null) {
    return this.http.delete(this.resourceUrl(id), this.options());
  }

  rawGet(url:any) {
    return this.http.get(url);
  }

  resourceUrl(id = null, position = null, params = {}) {

    switch (this.entityName) {
      case "login":
      case "signin":
      case "signout":
      case "password-recovery":
      case "password-change":
        this.host = environment.rawAPI;
        break;

      default:
        this.host = environment.apiUrl;
        break;
    }

    let base = [
      this.host,
      this.urlParameters(params),
      this.entityName,
      id
    ];

    if (position == 'middle') {

      base = [
        this.host,
        this.urlParameters(params),
        this.entityName
      ];

    }

    const endpoint = base
      .filter((element) => element)
      .join("/")
      .replace(/\/$/, "");

    let url = endpoint + this.queryString(params);

    let client_id: any = localStorage.getItem("empresa_id");
    if (client_id) {
      if (url.indexOf("?") >= 0) url = url + "&";
      else url = url + "?";
      url = url + "client_id=" + client_id;
    }

    return url;
  }

  protected urlParameters(params:any) {
    var urlParameters = [];

    for (var placeholder in params) {
      if (/.*_id$/.test(placeholder)) {
        urlParameters.push(`${placeholder}/${params[placeholder]}`);
      }
    }

    return urlParameters.join("/");
  }

  protected queryString(params:any) {
    if (params.query) {
      return `?${params.query}`;
    } else if (params.router) {
      return `/${params.router}`;
    } else {
      return "";
    }
  }

  verifyClient(): Observable<any> {
    return this.http.get(environment.apiUrl + '/me', this.options());
  }
}
