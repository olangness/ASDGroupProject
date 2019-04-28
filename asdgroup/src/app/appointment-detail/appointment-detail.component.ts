import { Component, OnInit } from '@angular/core';
import {AppointmentService} from '../appointment.service';
import {Appointment} from '../appointment';

@Component({
  selector: 'app-appointment-detail',
  templateUrl: './appointment-detail.component.html',
  styleUrls: ['./appointment-detail.component.css']
})
export class AppointmentDetailComponent implements OnInit {

  appointments: Appointment[] = [];
  
  constructor(private appService: AppointmentService) { }

  ngOnInit() {
    this.appService.getAppointments()
    .subscribe(data => {this.appointments = data
      console.log(data);
    });
  }

}
