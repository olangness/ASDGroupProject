import { Component, Output, OnInit, EventEmitter } from '@angular/core';
import { AppointmentService} from '../appointment.service';
import { Appointment} from '../appointment';

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
    var  hour: string = document.getElementById("hourBox").innerText;
    var  minute: string = document.getElementById("minuteBox").innerText;
    var  amOrPM: string = document.getElementById("amOrPmBox").innerText;
    var  reason: string = document.getElementById("reason").innerText;
    var studentID: number = parseInt(document.getElementById("sID").innerText);
    var advisorID: number = parseInt(document.getElementById("aID").innerText);
    var appID: number = parseInt(document.getElementById("appID").innerText);
    console.log(hour);
    console.log(minute);
    console.log(amOrPM);
    console.log(reason);
    console.log(studentID);
    console.log(advisorID);
    console.log(appID);
    var newAppointment: Appointment;
    // newAppointment.AdvisorID = advisorID;
    // newAppointment.StudentID = studentID;
    newAppointment.AppointmentReason = reason;
    // newAppointment.AppointmentID = appID;
    newAppointment.AppointmentTime = hour + minute + amOrPM;
    // console.log(newAppointment.AdvisorID);
    // console.log(newAppointment.StudentID);
    // console.log(newAppointment.AppointmentID);
    console.log(newAppointment.AppointmentReason);
    console.log(newAppointment.AppointmentTime);

    //put code to add to firebase here
  }


  goBack() {
    this.showChange.emit('home');
  }
}
