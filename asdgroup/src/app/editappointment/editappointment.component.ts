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

}
