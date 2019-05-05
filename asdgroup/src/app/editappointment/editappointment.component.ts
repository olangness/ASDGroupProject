import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-editappointment',
  templateUrl: './editappointment.component.html',
  styleUrls: ['./editappointment.component.css']
})
export class EditappointmentComponent implements OnInit {


  @Output() showChange = new EventEmitter();

  constructor() { }


  ngOnInit() {
  }

  goBack() {
    this.showChange.emit('home')
  }

}
