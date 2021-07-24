import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class CrudService {

  constructor(public fireStore: AngularFirestore) { }

  
  createEmployee(record: any){  // here we've added a new employee
    return this.fireStore.collection("employee").add(record);
  }


  getEmployee(){  //here we've gotten list of employee
    return this.fireStore.collection("employee").snapshotChanges();
  }

  updateEmployee(id, newRecord){  //here we've upadated an employee
    this.fireStore.doc('employee/' + id).update(newRecord);
  }

  deleteEmployee(id){ //here we've deleted an employee
    this.fireStore.doc('employee/' + id).delete();
  }
}
