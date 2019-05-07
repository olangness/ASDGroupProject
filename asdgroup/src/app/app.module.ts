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
import { HomedetailsComponent } from './homedetails/homedetails.component';

//import { AppointmentService } from './appointment.service';
import { UserInfoService } from './user-info.service';
import { AddappointmentComponent } from './addappointment/addappointment.component';
import { EditappointmentComponent } from './editappointment/editappointment.component';
import { InternalFormsSharedModule } from '@angular/forms/src/directives';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomedetailsComponent,
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
  providers: [UserInfoService],
  bootstrap: [AppComponent]
})

export class AppModule { }
