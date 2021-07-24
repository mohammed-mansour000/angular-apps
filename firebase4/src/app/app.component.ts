import { Employee, FireBaseService } from './serivices/fire-base.service';
import { Component, OnInit, TemplateRef } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Template } from '@angular/compiler/src/render3/r3_ast';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'firebase4';

  public form: FormGroup;
  public employeeList: Employee[] = [];
  public employeeDetails: Employee;

  constructor(
    private fb: FormBuilder,
    private modalService: NgbModal,
    private fireService : FireBaseService
  ){}
  ngOnInit(): void {
    this.getEmployeeList();
  }

  getEmployeeList(){
    this.fireService.getEmployees().subscribe(res =>{
      console.log(res)
      this.employeeList = res.map(e =>{
        return {
          id: e.payload.doc.id,
          name: e.payload.doc.data()['name'],
          age: e.payload.doc.data()['age'],
          address: e.payload.doc.data()['address']
        } as Employee;
       
      });
      console.log(this.employeeList)
    })
  }


  add(){
    this.fireService.addEmployee(this.form.value).then(res =>{
      alert("employee added");
    }).catch(err => {
      console.log(err)
    })
  }


  update(employeeId: string){
    this.fireService.updateEmployee(employeeId, this.form.value).then(res =>{

    }).catch(err => {
      console.log(err)
    })
  }


  delete(employeeId: string){
    if(confirm("are you sure?")){
      this.fireService.deleteEmployee(employeeId).then(res =>{

      }).catch(err => {
        console.log(err)
      })
    }
  }


  formInit(data: Employee): void {
    this.form = this.fb.group({
      name: [data ? data.name: '', Validators.required],
      age: [data ? data.age: '', Validators.required],
      address: [data ? data.address: '', Validators.required],
    })
  }


  openModal(content: TemplateRef<any>, employeeId: string){
    this.employeeDetails = this.employeeList.find((e: Employee) => e.id === employeeId);
    this.formInit(this.employeeDetails); 
    this.modalService.open(content, { backdrop: 'static', centered: true });
  }

  close(){
    this.modalService.dismissAll();
  }
}
