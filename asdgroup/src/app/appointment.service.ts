import { Injectable } from '@angular/core';
import { Appointment } from './model/appointment';
import {AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument} from '@angular/fire/firestore';
import { Observable} from 'rxjs';

// @Injectable()
// export class AppointmentService {

//   AppointmentTable: Observable<Appointment[]>
//   appoinmentCollection : AngularFirestoreCollection;

//   appointmnetDoc: AngularFirestoreDocument<Appointment>;

//   constructor(public afs: AngularFirestore) {
//     this.AppointmentTable = afs.collection('AppointmentTable').valueChanges();
//     this.appoinmentCollection = this.afs.collection('AppointmentTable');
//   }

//   getAppointments():Observable<Appointment[]>{

//     console.log(this.AppointmentTable);
//     return this.AppointmentTable;
//   }

//   addAppointments(app: Appointment){
//     this.appoinmentCollection.add(app);
//   }

//   createAppointment(data: Appointment){ //havent gotten to work yet
//     return new Promise<any>((resolve, reject) =>{
//       this.appoinmentCollection.add(data).then(res => {}, err => reject(err));
//     });
//   }

//   deleteAppointment(data){ //havent gotten to work yet
//     return this.appoinmentCollection.doc(data.payload.doc.id).delete();
//   }
// }
