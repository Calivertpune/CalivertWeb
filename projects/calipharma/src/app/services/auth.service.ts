import { Inject, Injectable } from '@angular/core';
import {
  ENVIRONMENT_TOKEN,
  Environment,
} from 'projects/sdk/src/lib/environment.token';
import { UserPasswordCredentials } from 'projects/sdk/src/lib/interfaces/user-passwords.credentials';
import { HttpProviderService } from 'projects/sdk/src/lib/services/http-provider.service';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(
    private _httpProviderService: HttpProviderService,
    @Inject(ENVIRONMENT_TOKEN) private _environmentToken: Environment
  ) {}

  public login(userCred: UserPasswordCredentials) {
    const ENDPOINT = `${this._environmentToken.apiBaseUrl}/login`;
    return this._httpProviderService.post(ENDPOINT, userCred);
  }

  public forgetPassword(email: string) {
    const ENDPOINT = `${this._environmentToken.apiBaseUrl}/forgetPassword`;
    return this._httpProviderService.post(ENDPOINT, email);
  }
}
