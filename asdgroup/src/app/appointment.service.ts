import { Injectable } from '@angular/core';
import { Appointment } from './appointment';
import {AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument} from '@angular/fire/firestore';
import { Observable} from 'rxjs';

@Injectable()
export class AppointmentService{
   
    appointments: Observable<Appointment[]>;
    appointmentCollection : AngularFirestoreCollection;

    appointmentDoc: AngularFirestoreDocument<Appointment>;
        
    constructor(public afs: AngularFirestore){
        this.appointments = afs.collection('Appointment_Table').valueChanges();
        this.appointmentCollection = this.afs.collection('Appointment_Table');
    }

    getAppointments():Observable<Appointment[]>{
            
        console.log(this.appointments);
        return this.appointments;

    }

    addAppointments(app: Appointment){
        this.appointmentCollection.add(app) ;
    }

   
}