import { environment } from './../../environments/environment';
import { User } from './user.model';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  selectedUser: User = {
    fullName: '',
    email: '',
    password: ''
  }

  constructor(private apiCaller: HttpClient) { }

  signUp(user: User){
    return this.apiCaller.post(environment.baseUrl + "register", user);
  }
}
