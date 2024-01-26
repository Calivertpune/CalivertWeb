import { Routes, RouterModule } from '@angular/router';
import { LOGIN_PATH } from '../../../../../sdk/src/lib/constants/path.names';
import { IsCanSeeLoginPageGuard } from '../../guards/is-can-see-login-page.guard';

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
];
