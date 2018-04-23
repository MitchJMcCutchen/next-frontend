import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router } from '@angular/router';

import { AuthService } from './../../login/services/auth.service';

@Injectable()
export class AuthGuardService implements CanActivate {

  constructor(
    public auth: AuthService,
    public router: Router,
  ) { }

  canActivate(route: ActivatedRouteSnapshot): boolean {
    if (this.auth.isAuthenticated()) {
      return true;
    }
    this.router.navigate(['login']);
    return false;
  }
}
