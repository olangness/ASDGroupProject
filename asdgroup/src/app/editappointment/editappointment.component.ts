import { Component, OnInit, EventEmitter, Output } from '@angular/core';

import { Appointment} from '../appointment';
import {APPOINTMENTS} from '../db-data';


@Component({
  selector: 'app-editappointment',
  templateUrl: './editappointment.component.html',
  styleUrls: ['./editappointment.component.css'],
  providers: []
})
export class EditappointmentComponent implements OnInit {
  
  AppointmentTable: Appointment[] = APPOINTMENTS;


  @Output() showChange = new EventEmitter();

  constructor() { 
    
  }


  ngOnInit() {
    
  }

  goBack() {
    this.showChange.emit('home')
  }

  deleteSelectedAppointment() {
    var x = (document.getElementById("appointmentBox") as HTMLInputElement).value;

    for(let i = 0; i < APPOINTMENTS.length; i++) {
      console.log(i);
      if(APPOINTMENTS[i].appointmentID == x) {

        APPOINTMENTS.splice(i, 1);
       
        
      }

    }
    console.log(APPOINTMENTS);
    console.log("survived ");
  }
}
