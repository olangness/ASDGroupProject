import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
//import {AngularFireModule} from '@angular/fire';
//import {AngularFirestoreModule} from '@angular/fire/firestore';
//import {AngularFireStorageModule} from '@angular/fire/storage';
//import {AngularFireDatabaseModule} from 'angularfire2/database';
import {environment} from '../environments/environment';
import { AppointmentCardComponent } from './appointment-card/appointment-card.component';
import { HomedetailsComponent } from './homedetails/homedetails.component';
import { AddappointmentComponent } from './addappointment/addappointment.component';
import { EditappointmentComponent } from './editappointment/editappointment.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    AppointmentCardComponent,
    HomedetailsComponent,
    AddappointmentComponent,
    EditappointmentComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
//    AngularFireModule.initializeApp(environment.firebase),
  //  AngularFirestoreModule,
  //  AngularFireStorageModule,
  //  AngularFireDatabaseModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule { }
