import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SharedServiceService {

  readonly apiUrl = "https://localhost:5001/api";
  readonly photoUrl = "https://localhost:5001/Photos/";


  constructor(private apiCaller: HttpClient) { }

  //for employee
  getEmployees(): Observable<any[]>{
    return this.apiCaller.get<any[]>(this.apiUrl + "/employee");
  }

  addEmployee(val: any){
    return this.apiCaller.post(this.apiUrl + "/employee", val);
  }

  updateEmployee(val: any){
    return this.apiCaller.put(this.apiUrl + "/employee", val);
  }

  deleteEmployee(id: number){
    return this.apiCaller.delete(this.apiUrl + "/employee/" + id);
  }


  //for department
  getDepartments(): Observable<any[]>{
    return this.apiCaller.get<any[]>(this.apiUrl + "/department");
  }

  addDepartment(val: any){
    return this.apiCaller.post(this.apiUrl + "/department", val);
  }

  updateDepartment(val: any){
    return this.apiCaller.put(this.apiUrl + "/department", val);
  }

  deleteDepartment(depId: number){
    return this.apiCaller.delete(this.apiUrl + "/department/" + depId);
  }


  //upload photo
  uploadPhoto(file: any){
    return this.apiCaller.post(this.apiUrl + "/employee/savefile", file);
  }

  //get all departments names
  getAllDepartmentNames(){
    return this.apiCaller.get(this.apiUrl + "/employee/GetAllDepartmentNames");
  }
}
