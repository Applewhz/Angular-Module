import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { UserService } from './user.service';

@Injectable({
  providedIn: 'root'
})
export class UserStoreService {

  user: any
  name!: string
  isAdmin:boolean = false
  private name$$: BehaviorSubject<any> = new BehaviorSubject(this.name);
  name$: Observable<boolean> = this.name$$
  private isAdmin$$: BehaviorSubject<any> = new BehaviorSubject(this.isAdmin);
  isAdmin$: Observable<boolean> = this.isAdmin$$
  constructor(private userService: UserService) { }

  getUser(){
    this.userService.getUser().subscribe(
      response => {response = this.user}
    )
  }
}
