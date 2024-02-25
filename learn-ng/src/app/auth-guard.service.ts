import { Injectable } from '@angular/core';
import { Route, Router, mapToCanActivate } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root',
})
export class AuthGuardService {
  constructor(private authService: AuthService, private router: Router) {}

  canActivate(): Observable<boolean> | Promise<boolean> | boolean {
    return this.authService.authenticate().then((auth: any) => {
      if (auth) {
        return true;
      } else {
        this.router.navigate(['/']);
        return false;
      }
    });
  }
  
}

const route: Route = {
  path: 'admin',
  canActivate: mapToCanActivate([AuthGuardService]),
};
