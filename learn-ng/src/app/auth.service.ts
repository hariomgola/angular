import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private isUserLoggedIn = false;
  constructor() {}
  authenticate() {
    const authPromise = new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(this.isUserLoggedIn);
      }, 3000);
    });
    return authPromise;
  }
  login() {
    this.isUserLoggedIn = true;
  }
  logout() {
    this.isUserLoggedIn = false;
  }
  returnLoginData() {
    return this.isUserLoggedIn;
  }
}
