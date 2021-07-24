import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class FireBaseService {

  constructor(
    private fireStore: AngularFirestore
  ) { }

  getEmployees(){
    return this.fireStore.collection('employee').snapshotChanges();
  }

  addEmployee(newEmployee: Employee){
    return this.fireStore.collection('employee').add(newEmployee)
  }


  updateEmployee(employeeId: string, newEmployee: Employee){
    return this.fireStore.doc('employee/' + employeeId).update(newEmployee)
  }


  deleteEmployee(employeeId: string){
    return this.fireStore.doc('employee/' + employeeId).delete();
  }
}

export interface Employee{
  id: string;
  name: string;
  age: number;
  address: string;
}
