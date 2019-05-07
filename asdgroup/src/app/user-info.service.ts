import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserInfoService {
  show;
  role;
  roleId;
  count;

  constructor() {
  this.show = 'login';
  this.role = '';
  this.roleId = '';
  this.count = 3;
  }

  setRole(newRole){
    this.role = newRole;
  }
  setRoleId(newId){
    this.roleId = newId;
  }
  setShow(newShow){
    this.show = newShow;
  }
  incrementCount(){
    this.count = this.count + 1;
  }
  decrementCount(){
    this.count = this.count - 1;
  }

  getRole(){
    return this.role;
  }
  getId(){
    return this.roleId;
  }
  getShow(){
    return this.show;
  }
  getCount(){
    return this.count;
  }
}
