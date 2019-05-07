import { Component, Output, OnInit, EventEmitter } from '@angular/core';
import { Appointment} from '../model/appointment';
import { APPOINTMENTS } from '../db-data';
import { getLocaleFirstDayOfWeek } from '@angular/common';

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
    var  hour: string = (<HTMLSelectElement>document.getElementById('hourBox')).value; //these get the values from the html elements and assigns them to variables to be used in making the appointment
    var  minute: string = (<HTMLSelectElement>document.getElementById('minuteBox')).value;
    var  amOrPM: string =(<HTMLSelectElement>document.getElementById('amOrPmBox')).value;
    var month: string = (<HTMLSelectElement>document.getElementById('month')).value;
    var day: string = (<HTMLSelectElement>document.getElementById('day')).value;
    var year: string = (<HTMLSelectElement>document.getElementById('year')).value;
    var  reason: string = (document.getElementById("reason") as HTMLInputElement).value;
    var studentID: number = parseInt((document.getElementById("sID") as HTMLInputElement).value);
    var advisorID: number = parseInt((document.getElementById("aID") as HTMLInputElement).value);
    //var appID: number = parseInt((document.getElementById("appID") as HTMLInputElement).value);
    
    var time: string =  month + " " + day + " " + year + " " + hour + ":" + minute + amOrPM + " GMT-0500 (Central Daylight Time)";
    
    var appID: number = APPOINTMENTS.length + 1;

    console.log("hour: " + hour); //tests to make sure data is being read
    console.log("minute: " + minute);
    console.log("amOrPM: " + amOrPM);
    console.log("reason: " + reason);
    console.log("studentID: " + studentID);
    console.log("advisorID: " + advisorID);
    console.log("appID: " + appID);
    

    var newAppointment: Appointment = {advisorID: advisorID, studentID: studentID, appointmentReason: reason, appointmentID: appID, appointmentTime: time }; //instantiates object of type appointment
    console.log("AdvisorID: " + newAppointment.advisorID); //tests to make sure the object got the values it should have
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
