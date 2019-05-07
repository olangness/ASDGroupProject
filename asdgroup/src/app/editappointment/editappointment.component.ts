import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { UserInfoService } from '../user-info.service';
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
  currentAppointments: Appointment[] = this.appservice.appointments;


  @Output() showChange = new EventEmitter();

  constructor(private appservice: UserInfoService) { 
    
  }

  ngOnInit() {
  }

  goBack() {
    this.showChange.emit('home')
  }

  deleteSelectedAppointment() {
    var x = (document.getElementById("appointmentBox") as HTMLInputElement).value;
    let n = 0;
    for(let i = 0; i < APPOINTMENTS.length; i++) {
      console.log(i);
      if(this.appservice.role == 'advisor'){
        if(APPOINTMENTS[i].advisorID == this.appservice.getId()){
          n = n + 1;
        }
      }
      if(this.appservice.role == 'student'){
        if(APPOINTMENTS[i].studentID == this.appservice.getId()){
          n = n + 1;
        }
      }
      if(APPOINTMENTS[i].appointmentID == x) {
        
        APPOINTMENTS.splice(i, 1);
        this.appservice.appointments.splice(n - 1, 1);
        console.log('i = ' + i);
        let m = n - 1;
        console.log('n = ' + m);
       
        
      }

    }
    console.log(APPOINTMENTS);
    console.log("survived ");
  }
}
