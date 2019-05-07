import { Component, EventEmitter, Output, OnInit } from '@angular/core';
import { User } from '../model/user';
import { USERS } from '../db-data';
import { UserInfoService } from '../user-info.service';
import { SelectorListContext } from '@angular/compiler';
import { InternalFormsSharedModule } from '@angular/forms/src/directives';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  //This code is for changing the ng if show. To switch the value edit the this.showChange.emit('NEW VALUE');
  @Output() showChange = new EventEmitter();
  


  //DO NOT CHANGE
  //DO NOT CHANGE
  //DO NOT CHANGE
  //DO NOT CHANGE
  //DO NOT CHANGE
  //DO NOT CHANGE
  //DO NOT CHANGE
  //DO NOT CHANGE vvvvvvvvv
  USERS: any = [
    {
        username: 'mattmartin',
        password: '123',
        role: 'student',
        studentID: 1
    },
    {
        username: 'jarrettmeester',
        password: '456',
        role: 'advisor',
        advisorID: 1
    },
    {
        username: 'sampenney',
        password: '789',
        role: 'student',
        studentID: 2
    },
    {
        username: 'drewwickoren',
        password: '123',
        role: 'student',
        studentID: 3
    },
    {
        username: 'olsonlangness',
        password: '456',
        role: 'advisor',
        advisorID: 2
    },

]
  //DO NOT CHANGE ^^^^^^^^^
  //DO NOT CHANGE
  //DO NOT CHANGE
  //DO NOT CHANGE
  //DO NOT CHANGE
  //DO NOT CHANGE
  //DO NOT CHANGE
  //DO NOT CHANGE 

  constructor(private appservice: UserInfoService) { }

  hideLogin() {
    var un: string;
    var pw: string;
    un = ((document.getElementById("text1") as HTMLInputElement).value);
    pw = ((document.getElementById("text2") as HTMLInputElement).value);
    console.log("username: " + un);
    console.log("password: " + pw); //testing to make sure the username and password are getting the correct values
    for(let j = 0; j < 1; j++){
      for(let i = 0; i < USERS.length; i++){
        console.log(i);
        if(USERS[i].username == un && USERS[i].password == pw){
          if(USERS[i].role == 'advisor'){
            this.appservice.setRole(USERS[i].role);
            this.appservice.setRoleId(USERS[i].advisorID);
            console.log('role: ' + this.appservice.getRole());
            console.log('ID: ' + this.appservice.getId());
          }
          if(USERS[i].role == 'student'){
            this.appservice.setRole(USERS[i].role);
            this.appservice.setRoleId(USERS[i].studentID);
            console.log('role: ' + this.appservice.getRole());
            console.log('ID: ' + this.appservice.getId());
          }
          this.showChange.emit('home');
          break;
        }
        else{
          continue;
        }
      }
      document.getElementById("validatetxt").style.display = 'block';
    }
    console.log("got through loop");
    //this.showChange.emit('home'); //this is the event send to change the ng if show to
  }
  //^^^^^^^^^
  

  ngOnInit() {
  }

}
