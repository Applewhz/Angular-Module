import { Injectable } from '@angular/core';
import { UserService } from './user.service';

@Injectable({
  providedIn: 'root'
})
export class UserStoreService {

  user: any
  constructor(private userService: UserService) { }

  getUser(){
    this.userService.getUser().subscribe(
      response => {response = this.user}
    )
  }
}
