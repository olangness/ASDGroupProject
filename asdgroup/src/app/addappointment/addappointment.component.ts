import { Component, Output, OnInit, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-addappointment',
  templateUrl: './addappointment.component.html',
  styleUrls: ['./addappointment.component.css']
})
export class AddappointmentComponent implements OnInit {
  @Output() showChange = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }


  goBack() {
    this.showChange.emit('home');
  }
}
