import { Component, OnInit } from '@angular/core';
import {APPOINTMENTS} from '../db-data';
import { Appointment} from '../appointment';
import { UserInfoService } from '../user-info.service';


@Component({
  selector: 'app-homedetails',
  templateUrl: './homedetails.component.html',
  styleUrls: ['./homedetails.component.css']
})
export class HomedetailsComponent implements OnInit {

  AppointmentTable: Appointment[] = APPOINTMENTS;

  constructor(private appservice: UserInfoService) { }

  ngOnInit() {
  }

}
