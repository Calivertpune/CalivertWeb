import { Inject, Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivate,
  Router,
  RouterStateSnapshot,
  UrlTree,
} from '@angular/router';
import { Observable } from 'rxjs';
import { StorageProviderService } from '../services/storage-provider.service';
import { USER_TOKEN_KEY } from 'projects/sdk/src/lib/constants/storage.items';
import isJwtTokenExpired from 'jwt-check-expiry';
import { LOGIN_PATH } from 'projects/sdk/src/lib/constants/path.names';

@Injectable({
  providedIn: 'root',
})
export class IsLoginGuard implements CanActivate {
  constructor(
    private _storageProvideService: StorageProviderService,
    private _router: Router
  ) {}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ):
    | Observable<boolean | UrlTree>
    | Promise<boolean | UrlTree>
    | boolean
    | UrlTree {
    const USER_TOKEN = this._storageProvideService.getItem(USER_TOKEN_KEY);
    if (USER_TOKEN && isJwtTokenExpired(USER_TOKEN!)) {
      return true;
    }
    void this._router.navigate(['/', LOGIN_PATH]);
    return false;
  }
}