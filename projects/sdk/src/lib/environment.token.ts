import { InjectionToken } from '@angular/core';

export interface Environment {
  production?: boolean;
  apiBaseUrl: string;
}

export const ENVIRONMENT_TOKEN: InjectionToken<Environment> =
  new InjectionToken('ENVIRONMENT_TOKEN');
