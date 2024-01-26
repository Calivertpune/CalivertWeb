import { Inject, Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class HttpProviderService {
  constructor(private _httpClient: HttpClient) {}

  public get(url: string, httpHeaders?: HttpHeaders) {
    return this._httpClient.get(url, { headers: httpHeaders });
  }

  public post(url: string, postData: any, httpHeaders?: HttpHeaders) {
    return this._httpClient.post(url, postData, { headers: httpHeaders });
  }
}
