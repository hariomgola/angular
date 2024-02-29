import { Injectable, inject } from '@angular/core';
import { AuthService } from '../auth.service';
import {
  ActivatedRouteSnapshot,
  CanActivateFn,
  Router,
  RouterStateSnapshot,
} from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
// Local class declaration
class AuthGuard {
  constructor(private router: Router, private authService: AuthService) {}

  // It Simply save the router we can also use can activate child for saving child component
  CanActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<boolean> | Promise<boolean> | boolean | any {
    return this.authService
      .isAutheticate()
      .then((authenticate: boolean | any) => {
        if (authenticate) {
          return authenticate;
        } else {
          this.router.navigate(['/auth-failed']);
        }
      })
      .catch((err) => {
        console.log(` |> Error in the guard`, err);
        this.router.navigate(['/error']);
      });
  }
  // It will only save the children from accessing
  CanActivateChildren(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<boolean> | Promise<boolean> | boolean | any {
    return this.CanActivate(route, state);
  }
}

// This Will Protect the Route
export const IsAuthGuard: CanActivateFn = (
  route: ActivatedRouteSnapshot,
  state: RouterStateSnapshot
): boolean => {
  return inject(AuthGuard).CanActivate(route, state);
};

// This Will Protect the Child Route
export const IsAuthGuardChild: CanActivateFn = (
  route: ActivatedRouteSnapshot,
  state: RouterStateSnapshot
): boolean => {
  return inject(AuthGuard).CanActivateChildren(route, state);
};
