import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  isUserLogin = false;
  constructor() {}

  isAutheticate() {
    const promise = new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(this.isUserLogin);
      }, 1000);
    });
    return promise;
  }

  loginUser() {
    this.isUserLogin = true;
  }
  logoutUser() {
    this.isUserLogin = false;
  }
}
