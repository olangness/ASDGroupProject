import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { AppointmentService} from '../appointment.service';
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

  constructor(private appService: AppointmentService) { 
    
  }


  ngOnInit() {
    
  }

  goBack() {
    this.showChange.emit('home')
  }

}
