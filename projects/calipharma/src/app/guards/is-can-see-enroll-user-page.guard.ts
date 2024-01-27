import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivate,
  Router,
  RouterStateSnapshot,
  UrlTree,
} from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { HOME_PATH } from 'projects/sdk/src/lib/constants/path.names';
import { UserRoles } from 'projects/sdk/src/lib/enums/user.roles';
import { User } from 'projects/sdk/src/lib/interfaces/user';
import { UserService } from 'projects/sdk/src/lib/services/user.service';
import { Observable, first, map } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class IsCanSeeEnrollUserPageGuard implements CanActivate {
  constructor(
    private _userService: UserService,
    private _router: Router,
    private _toastrService: ToastrService
  ) {}
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
        if (!userInfo.roleList.includes(UserRoles.SUPER_ADMIN)) {
          this._toastrService.error(
            'You do not have the correct permissions/privileges to access this application. Please contact your administrator for further information',
            'Incorrect Privileges/Permissions'
          );
          void this._router.navigate(['/', HOME_PATH]);
          return false;
        }
        return true;
      })
    );
  }
}
