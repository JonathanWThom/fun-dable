import { Injectable } from '@angular/core';
import {AngularFire, AuthProviders, AuthMethods} from 'angularfire2';

@Injectable()
export class AuthenticationService {

  constructor(public af: AngularFire) { }

  login() {
    return this.af.auth.login({
      provider: AuthProviders.Github,
      method: AuthMethods.Popup,
    });
  }


  logout() {
    return this.af.auth.logout();
  }
}
