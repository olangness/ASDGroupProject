import { Component, Output, OnInit, EventEmitter } from '@angular/core';
import { Appointment} from '../model/appointment';
import { APPOINTMENTS } from '../db-data';

@Component({
  selector: 'app-addappointment',
  templateUrl: './addappointment.component.html',
  styleUrls: ['./addappointment.component.css']
})
export class AddappointmentComponent implements OnInit {
  @Output() showChange = new EventEmitter();

  constructor() { }

  AppointmentTable: Appointment[] = APPOINTMENTS;

  ngOnInit() {
  }

  add() {
    var  hour: string = (<HTMLSelectElement>document.getElementById('hourBox')).value;
    var  minute: string = (<HTMLSelectElement>document.getElementById('minuteBox')).value;
    var  amOrPM: string =(<HTMLSelectElement>document.getElementById('amOrPmBox')).value;
    var  reason: string = (document.getElementById("reason") as HTMLInputElement).value;
    var studentID: number = parseInt((document.getElementById("sID") as HTMLInputElement).value);
    var advisorID: number = parseInt((document.getElementById("aID") as HTMLInputElement).value);
    var appID: number = parseInt((document.getElementById("appID") as HTMLInputElement).value);
    console.log("hour: " + hour);
    console.log("minute: " + minute);
    console.log("amOrPM: " + amOrPM);
    console.log("reason: " + reason);
    console.log("studentID: " + studentID);
    console.log("advisorID: " + advisorID);
    console.log("appID: " + appID);
    var time: string = hour + ":" + minute + amOrPM;

    var newAppointment: Appointment = {advisorID: advisorID, studentID: studentID, appointmentReason: reason, appointmentID: appID, appointmentTime: time };
    console.log("AdvisorID: " + newAppointment.advisorID);
    console.log("StudentID: " + newAppointment.studentID);
    console.log("AppointmentID: " + newAppointment.appointmentID);
    console.log("Reason: " + newAppointment.appointmentReason);
    console.log("Time: " + newAppointment.appointmentTime);

    this.AppointmentTable.push(newAppointment);
  }


  goBack() {
    this.showChange.emit('home');
  }
}
