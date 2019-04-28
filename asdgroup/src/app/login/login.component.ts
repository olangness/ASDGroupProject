import { Component, EventEmitter, Output, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  //This code is for changing the ng if show. To switch the value edit the this.showChange.emit('NEW VALUE');
  @Output() showChange = new EventEmitter();

  hideLogin() {
    this.showChange.emit('home'); //this is the event send to change the ng if show to
  }
  //^^^^^^^^^

  constructor() { }

  ngOnInit() {
  }

}
