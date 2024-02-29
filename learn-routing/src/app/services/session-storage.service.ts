import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class SessionStorageService {
  constructor() {}
  getSessionStorageValue(key: string) {
    const _data = sessionStorage.getItem(key);
    return JSON.parse(_data ? _data : '');
  }
  setSessionStorageValue(key: string, data: any) {
    const _data = JSON.stringify(data);
    sessionStorage.setItem(key, _data);
  }
  removeSessionStorageValue(key: string) {
    sessionStorage.removeItem(key);
  }
}
