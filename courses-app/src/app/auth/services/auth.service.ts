import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { BehaviorSubject } from 'rxjs/internal/BehaviorSubject';
import { SessionStorageService } from './session-storage.service';

@Injectable({
  providedIn: 'root'
})

export interface RegistrationDetails {
  name: string
  email: string
  password: string
}
export class AuthService {

  sessionStorageService = new SessionStorageService
  isAuthorised: boolean = false
  private isAuthorized$$: BehaviorSubject<any> = new BehaviorSubject(this.isAuthorised);
  isAuthorized$: Observable<boolean> = this.isAuthorized$$
  
  constructor() { }

  login(loginData: string) {
    this.sessionStorageService.setToken('TokenKey', loginData)
    console.log(loginData)
  }

  logout() {
    this.sessionStorageService.deleteToken('TokenKey')
  }

  register(userDetails: RegistrationDetails) {
    console.log(userDetails)
  }

}
