import { Routes } from '@angular/router';
import { HOME_PATH } from 'projects/sdk/src/lib/constants/path.names';
import { IsLoginGuard } from '../../guards/is-login.guard';
import { ENROLL_USER_PATH } from 'projects/sdk/src/lib/constants/path.names';
import { IsDefaultPasswordChangedGuard } from '../../guards/is-default-password-changed.guard';
import { IsCanSeeEnrollUserPageGuard } from '../../guards/is-can-see-enroll-user-page.guard';

export const Full_ROUTES: Routes = [
  {
    path: `${HOME_PATH}`,
    loadComponent: () =>
      import('../../home/home.component').then(
        (homeModule) => homeModule.HomeComponent
      ),
    canActivate: [IsLoginGuard, IsDefaultPasswordChangedGuard],
  },
  {
    path: `${ENROLL_USER_PATH}`,
    loadComponent: () =>
      import('../../enroll-user/enroll-user.component').then(
        (enrollUserModule) => enrollUserModule.EnrollUserComponent
      ),
    canActivate: [
      IsLoginGuard,
      IsCanSeeEnrollUserPageGuard,
      IsDefaultPasswordChangedGuard,
    ],
  },
];
