import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }
  
  baseURL = "http://localhost:4000/"

  getUser() {
    return this.http.get(this.baseURL+'users/me')
    .pipe(map(response => {return response}))
  }
}
