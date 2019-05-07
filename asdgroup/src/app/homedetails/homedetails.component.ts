import { Component, OnInit } from '@angular/core';
import {APPOINTMENTS} from '../db-data';
import { Appointment} from '../appointment';


@Component({
  selector: 'app-homedetails',
  templateUrl: './homedetails.component.html',
  styleUrls: ['./homedetails.component.css']
})
export class HomedetailsComponent implements OnInit {

  AppointmentTable: Appointment[] = APPOINTMENTS;

  constructor() { }

  ngOnInit() {
  }

}
