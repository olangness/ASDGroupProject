import { Component } from '@angular/core';

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
}
