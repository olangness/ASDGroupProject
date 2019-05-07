import { Component } from '@angular/core';
import { UserInfoService } from './user-info.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
   show = 'login';
   title = 'asdgroup';

   //changes the ng if variable
   changeShow(showInput) {
     this.show = showInput;
   }

   showAddAppointment(){
     this.show = 'addappointment'
   }

   showEditAppointment(){
    this.show = 'editappointment'
  }
  
}
