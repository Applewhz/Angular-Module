import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SessionStorageService {

  constructor() { }

  get nativeWindow(): Window {
    return window;
  }

  setToken = (key: any, value: any) => {
    sessionStorage.setItem(key, value);
  }

  getToken = (key: any) => {
    sessionStorage.getItem(key);
  }

  deleteToken = (key: any) => {
    sessionStorage.removeItem(key);
  }
}
