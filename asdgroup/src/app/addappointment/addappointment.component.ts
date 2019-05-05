import { Component, Output, OnInit, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-addappointment',
  templateUrl: './addappointment.component.html',
  styleUrls: ['./addappointment.component.css']
})
export class AddappointmentComponent implements OnInit {
  @Output() showChange = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  add() {
    var  hour: string = document.getElementById("hourBox").innerText
    var  minute: string = document.getElementById("minuteBox").innerText
    var  amOrPM: string = document.getElementById("amOrPmBox").innerText
    var  reason: string = document.getElementById("reason").innerText

    //put code to add to firebase here
  }


  goBack() {
    this.showChange.emit('home');
  }
}
