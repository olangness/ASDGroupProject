import { Component, OnInit } from '@angular/core';
import {AppointmentService} from '../appointment.service';
import {Appointment} from '../appointment';
import { fromEventPattern} from 'rxjs';

@Component({
  selector: 'app-add-appointment',
  templateUrl: './add-appointment.component.html',
  styleUrls: ['./add-appointment.component.css']
})
export class AddAppointmentComponent implements OnInit {

  app: Appointment = {
    appointmentid: 0,
    studentid: 0,
    advisorid: 0,
    reason: ''
  }

  constructor(private appService: AppointmentService) { }

  ngOnInit() {
  }

  onSubmit(){
    if(this.app.advisorid != 0 && this.app.appointmentid != 0 && this.app.studentid != 0 && this.app.reason != '')
      this.appService.addAppointments(this.app);
    this.app.advisorid = 0;
    this.app.studentid = 0;
    this.app.appointmentid = 0;
    this.app.reason = '';
  }

}
