import { Component, OnInit } from '@angular/core';
import { AppointmentService} from '../appointment.service';
import {Appointment} from '../appointment';
@Component({
  selector: 'app-appointment-list',
  templateUrl: './appointment-list.component.html',
  styleUrls: ['./appointment-list.component.css']
})
export class AppointmentListComponent implements OnInit {

  appointments: Appointment[] = [];

  constructor(private appService: AppointmentService) { }

  ngOnInit() {
    this.appService.getAppointments()
    .subscribe(data => {this.appointments = data
      console.log(data);
    });
  }

}
