import { Component, OnInit, Input } from '@angular/core';
import { Appointment} from '../model/appointment';

// @Component({
//   selector: 'app-appointment-list',
//   templateUrl: './appointment-list.component.html',
//   styleUrls: ['./appointment-list.component.css'],
//   providers: []
// })
// export class AppointmentListComponent implements OnInit {

//   AppointmentTable: Appointment[];

//   constructor(private appService: AppointmentService) { }

//   @Input()


//   ngOnInit() {
//     this.appService.getAppointments().subscribe(data => {this.AppointmentTable = data 
//       console.log(data)
//     });
//   }

//   deleteAppointment(appointmentIDInput) {
//     console.log("here is the appointment id: " + appointmentIDInput)
//   }
// }
