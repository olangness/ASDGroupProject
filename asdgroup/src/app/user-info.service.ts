import { Injectable } from '@angular/core';
import { APPOINTMENTS } from './db-data';

@Injectable({
  providedIn: 'root'
})
export class UserInfoService {
  show;
  role;
  roleId;
  count;
  appointments;

  constructor() {
  this.show = 'login';
  this.role = '';
  this.roleId = '';
  this.count = 3;
  this.appointments = [];
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
  initializeArray(){
    this.appointments = [];
    for( let appoint of APPOINTMENTS){
      if (this.role=='advisor'){
        if(appoint.advisorID == this.roleId){
          console.log("working: " + appoint.appointmentReason);
          this.appointments.push(appoint);
          
        }
      }
      if (this.role=='student'){
        if(appoint.studentID == this.roleId){
          this.appointments.push(appoint);
        }
      }
    }
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
