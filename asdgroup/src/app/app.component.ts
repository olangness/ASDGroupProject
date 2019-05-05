import { Component } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  APPOINTMENTS: any =[
    {
        advisorID: 1,
        studentID: 1,
        appointmentID: 1,
        appointmentReason: 'Major',
        appointmentTime: new Date(2019, 5, 10, 13, 30, 0, 0)
    },
    {
        advisorID: 2,
        studentID: 2,
        appointmentID: 2,
        appointmentReason: 'Job',
        appointmentTime: new Date(2019, 5, 11, 14, 0, 0, 0)
    },
    {
        advisorID: 1,
        studentID: 3,
        appointmentID: 3,
        appointmentReason: 'Major',
        appointmentTime: new Date(2019, 5, 12, 15, 30, 0, 0)
    }
  ]
  appointment1 = this.APPOINTMENTS[0];
  appointment2 = this.APPOINTMENTS[1];
  appointment3 = this.APPOINTMENTS[2];
   show = 'login';
   title = 'asdgroup';

   //changes the ng if variable
   changeShow(showInput) {
     this.show = showInput;
   }
  
}
