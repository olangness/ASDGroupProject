import { Component, OnInit, Input } from '@angular/core';
import { AppointmentService} from '../appointment.service';
import { Appointment} from '../appointment';

@Component({
  selector: 'app-appointment-list',
  templateUrl: './appointment-list.component.html',
  styleUrls: ['./appointment-list.component.css'],
  providers: []
})
export class AppointmentListComponent implements OnInit {

  AppointmentTable: Appointment[];

  constructor(private appService: AppointmentService) { }

  @Input()


  ngOnInit() {
    this.appService.getAppointments().subscribe(data => {this.AppointmentTable = data 
      console.log(data)
    });
  }

}
