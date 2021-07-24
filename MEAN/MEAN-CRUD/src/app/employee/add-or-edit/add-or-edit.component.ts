import { EmployeeService } from './../../services/employee.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-add-or-edit',
  templateUrl: './add-or-edit.component.html',
  styleUrls: ['./add-or-edit.component.css']
})
export class AddOrEditComponent implements OnInit {

  viewTitle = '';
  id = "";
  employee: any = {
    fullName: '',
    email: '',
    mobile: '',
    city: '',
    fullNameError: '',
    emailError: ''
  };


  constructor(private employeeService: EmployeeService, private aRouter: ActivatedRoute) { 
    this.id = this.aRouter.snapshot.params['id'];
    console.log(this.id)
  }

  ngOnInit(): void {
    if(this.id){
      this.viewTitle = "Edit Employee";
      this.getEmployeeById(this.id);
    }else{
      this.viewTitle = "Insert Employee";
    }
  }

  getEmployeeById(id: any){
    this.employeeService.getEmployeeById(id).subscribe(
      res => {
        this.employee = res;
        console.log(res);
      },
      err => {
        console.log(err);
      }
    );
  }

  onSubmit(form: NgForm){
    console.log(form.value);
    this.employee.fullNameError = '';
    this.employee.emailError = '';

    let employee = {
      _id: "",
      fullName: form.value.fullName,
      email: form.value.email,
      mobile: form.value.mobile,
      city: form.value.city,
    };
    if(this.id){
      employee._id = this.id;
    }
    this.employeeService.addOrEditEmployee(employee).subscribe(
      res => {
        console.log(res);
      },
      err => {
        console.log(err);
        this.employee.fullNameError = err.error.fullNameError;
        this.employee.emailError = err.error.emailError;
      }
    );
  }

}
