import { Injectable } from '@angular/core';
import { User } from '../interfaces/user';
import { StorageProviderService } from './storage-provider.service';
import { USER_TOKEN_KEY } from '../constants/storage.items';
import { of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  public userInfo: User;
  constructor(private _storageProviderService: StorageProviderService) {}

  public initializeUserInfo() {
    const USER_TOKEN = this._storageProviderService.getItem(USER_TOKEN_KEY);
    if (USER_TOKEN) {
    }
    return of([]);
  }
}
