import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class StorageProviderService {
  constructor() {}

  public setItem(itemKey: string, itemValue: any) {
    localStorage.setItem(itemKey, itemValue);
  }

  public getItem(itemKey: string) {
    return localStorage.getItem(itemKey);
  }

  public removeItem(itemKey) {
    localStorage.removeItem(itemKey);
  }

  public clear() {
    localStorage.clear();
  }
}
