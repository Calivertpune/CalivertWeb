import { Routes, RouterModule } from '@angular/router';
import { LOGIN_PATH } from '../../../../../sdk/src/lib/constants/path.names';
import { IsCanSeeLoginPageGuard } from '../../guards/is-can-see-login-page.guard';
import { CHANGE_DEFAULT_PASSWORD_PATH } from 'projects/sdk/src/lib/constants/path.names';
import { IsLoginGuard } from '../../guards/is-login.guard';
import { IsCanSeeDefaultPasswordPageGuard } from '../../guards/is-can-see-default-password-page.guard';

//Route for content layout without sidebar, navbar and footer for pages like Login, Registration etc...

export const CONTENT_ROUTES: Routes = [
  {
    path: `${LOGIN_PATH}`,
    loadComponent: () =>
      import('../../login/login.component').then(
        (loginModule) => loginModule.LoginComponent
      ),
    canActivate: [IsCanSeeLoginPageGuard],
  },
  {
    path: `${CHANGE_DEFAULT_PASSWORD_PATH}`,
    loadComponent: () =>
      import(
        '../../change-default-password/change-default-password.component'
      ).then(
        (changePasswordModule) =>
          changePasswordModule.ChangeDefaultPasswordComponent
      ),
    canActivate: [IsLoginGuard, IsCanSeeDefaultPasswordPageGuard],
  },
];
