import { EmployeeService } from '../../services/employee.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  employees: any[] = [];

  constructor(private employeeService: EmployeeService) { }

  ngOnInit(): void {
    this.getEmployeesList();
  }

  getEmployeesList(){
    this.employeeService.getAllEmployees().subscribe(
      (res:any) => {
        this.employees = res;
        console.log(res);
      },
      err => {
        console.log(err);
      }
    );
  }

  delete(id: any){
    if(confirm("Are You Sure You Want to Delete!!")){
      this.employeeService.deleteEmployeeById(id).subscribe(
        res => {
          console.log(res);
          this.getEmployeesList();
        },
        err =>{
          console.log(err);
        }
      );
    }
  }
}
