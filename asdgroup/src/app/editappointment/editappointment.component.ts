import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { AppointmentService} from '../appointment.service';
import { Appointment} from '../appointment';


@Component({
  selector: 'app-editappointment',
  templateUrl: './editappointment.component.html',
  styleUrls: ['./editappointment.component.css']
})
export class EditappointmentComponent implements OnInit {
  
  AppointmentTable2: Appointment[];


  @Output() showChange = new EventEmitter();

  constructor(private appService: AppointmentService) { }


  ngOnInit() {
    this.appService.getAppointments().subscribe(data => {this.AppointmentTable2 = data 
      console.log(data)
    });
  }

  goBack() {
    this.showChange.emit('home')
  }

}
