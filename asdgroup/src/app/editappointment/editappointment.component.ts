import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { AppointmentService} from '../appointment.service';
import { Appointment} from '../appointment';


@Component({
  selector: 'app-editappointment',
  templateUrl: './editappointment.component.html',
  styleUrls: ['./editappointment.component.css'],
  providers: []
})
export class EditappointmentComponent implements OnInit {
  
  AppointmentTable: Appointment[];


  @Output() showChange = new EventEmitter();

  constructor(private appService2: AppointmentService) { }


  ngOnInit() {
    this.appService2.getAppointments().subscribe(data => {this.AppointmentTable = data 
      console.log(data)
    });
  }

  goBack() {
    this.showChange.emit('home')
  }

}
