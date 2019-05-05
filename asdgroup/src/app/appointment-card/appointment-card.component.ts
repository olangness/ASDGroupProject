import { Component, OnInit, Input } from '@angular/core';
import { Appointment} from '../model/appointment';

@Component({
  selector: 'app-appointment-card',
  templateUrl: './appointment-card.component.html',
  styleUrls: ['./appointment-card.component.css']
})
export class AppointmentCardComponent implements OnInit {

  @Input()
    appointment: Appointment;

  constructor() { }

  ngOnInit() {
  }

}
