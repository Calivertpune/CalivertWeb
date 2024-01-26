import { Routes } from '@angular/router';
import { HOME_PATH } from 'projects/sdk/src/lib/constants/path.names';
import { IsLoginGuard } from '../../guards/is-login.guard';

export const Full_ROUTES: Routes = [
  {
    path: `${HOME_PATH}`,
    loadComponent: () =>
      import('../../home/home.component').then(
        (homeModule) => homeModule.HomeComponent
      ),
    canActivate: [IsLoginGuard],
  },
];
