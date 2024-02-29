import { Injectable, inject } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanDeactivateFn,
  RouterStateSnapshot,
} from '@angular/router';
import { Observable } from 'rxjs';

export interface CanComponentDeactivate {
  canDeactivate: () => Observable<boolean> | Promise<boolean> | boolean;
}

@Injectable({
  providedIn: 'root',
})
// Simple Class Declaration
class DeactivateGuard {
  constructor() {}
  canDeactivate(
    component: CanComponentDeactivate,
    currentRoute: ActivatedRouteSnapshot,
    currentState: RouterStateSnapshot,
    nextState?: RouterStateSnapshot
  ): Observable<boolean> | Promise<boolean> | boolean {
    return component.canDeactivate ? component.canDeactivate() : true;
  }
}

// Here this guard is user to moving to another route when ever true is not retuned
export const IsDeactivateGuard: CanDeactivateFn<CanComponentDeactivate> = (
  component: CanComponentDeactivate,
  currentRoute: ActivatedRouteSnapshot,
  currentState: RouterStateSnapshot,
  nextState?: RouterStateSnapshot
): Observable<boolean> | Promise<boolean> | boolean => {
  return inject(DeactivateGuard).canDeactivate(
    component,
    currentRoute,
    currentState,
    nextState
  );
};
