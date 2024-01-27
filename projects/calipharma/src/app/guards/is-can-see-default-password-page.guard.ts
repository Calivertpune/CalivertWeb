import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivate,
  Router,
  RouterStateSnapshot,
  UrlTree,
} from '@angular/router';
import { HOME_PATH } from 'projects/sdk/src/lib/constants/path.names';
import { User } from 'projects/sdk/src/lib/interfaces/user';
import { UserService } from 'projects/sdk/src/lib/services/user.service';
import { Observable, first, map } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class IsCanSeeDefaultPasswordPageGuard implements CanActivate {
  constructor(private _userService: UserService, private _router: Router) {}
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ):
    | Observable<boolean | UrlTree>
    | Promise<boolean | UrlTree>
    | boolean
    | UrlTree {
    return this._userService.userInfo$.pipe(
      first(),
      map((userInfo: User) => {
        if (!userInfo.hasChangedDefaultPassword) {
          return true;
        }
        void this._router.navigate(['/', HOME_PATH]);
        return false;
      })
    );
  }
}
