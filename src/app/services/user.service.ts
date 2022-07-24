import { Users } from './../Models/Users';
import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class UserService {
  User:Users=new Users();
  constructor() { }
  confirmPurchase(u:Users){
    this.User=u;
  }
  getUser():Users{
    console.log(this.User.name);
    console.log(this.User.address);

    return this.User;
  }
}
