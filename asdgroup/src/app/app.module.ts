import { BrowserModule } from '@angular/platform-browser';
import { NgModule, InjectionToken } from '@angular/core';
import {FormsModule} from '@angular/forms';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import {AngularFireModule} from '@angular/fire';
import {AngularFirestoreModule, AngularFirestore} from '@angular/fire/firestore';
import {AngularFireStorageModule} from '@angular/fire/storage';
import {AngularFireDatabaseModule} from 'angularfire2/database';
import {environment} from '../environments/environment';
import { AppointmentCardComponent } from './appointment-card/appointment-card.component';
import { HomedetailsComponent } from './homedetails/homedetails.component';
import { AppointmentListComponent } from './appointment-list/appointment-list.component';
import { AppointmentService } from './appointment.service';
import { AddappointmentComponent } from './addappointment/addappointment.component';
import { EditappointmentComponent } from './editappointment/editappointment.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    AppointmentCardComponent,
    HomedetailsComponent,
    AppointmentListComponent,
    AddappointmentComponent,
    EditappointmentComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule,
    AngularFireStorageModule
  ],
  providers: [AppointmentService],
  bootstrap: [AppComponent]
})

export class AppModule { }
