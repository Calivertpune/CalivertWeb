import { Injectable } from '@angular/core';
import { User } from '../interfaces/user';
import { StorageProviderService } from './storage-provider.service';
import { USER_TOKEN_KEY } from '../constants/storage.items';
import { BehaviorSubject, Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  public userInfo: User;
  private _userInfo$: BehaviorSubject<User> = new BehaviorSubject<User>(
    {} as User
  );
  public userInfo$: Observable<User> = this._userInfo$.asObservable();
  constructor(private _storageProviderService: StorageProviderService) {}

  public initializeUserInfo() {
    const USER_TOKEN = this._storageProviderService.getItem(USER_TOKEN_KEY);
    if (USER_TOKEN) {
    }
    return of([]);
  }

  public setUserInfo(userInfo: User) {
    this.userInfo = userInfo;
    this._userInfo$.next(userInfo);
  }
}
