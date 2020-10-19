import { Injectable } from '@angular/core';
import { User } from 'src/app/model/user';

@Injectable({
  providedIn: 'root'
})


export class UserService {

  user: User[] = [];

  constructor() { }

  addUser(user: User) {
    this.user.push(user);
  }

  getUser(): User[]{
    return this.user;
  }

}
