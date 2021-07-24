import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  baseUrl = environment.baseUrl;

  constructor(private apiCaller: HttpClient) { }

  getAllEmployees(){
    return this.apiCaller.get(`${this.baseUrl}/list`);
  }

  getEmployeeById(id: any){
    return this.apiCaller.get(`${this.baseUrl}/${id}`);
  }

  deleteEmployeeById(id: any){
    return this.apiCaller.get(`${this.baseUrl}/delete/${id}`);
  }

  addOrEditEmployee(employee: any){
    return this.apiCaller.post(`${this.baseUrl}`, employee);
  }
}
