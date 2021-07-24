import { CrudService } from './../services/crud.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-update-employee',
  templateUrl: './update-employee.component.html',
  styleUrls: ['./update-employee.component.css']
})
export class UpdateEmployeeComponent implements OnInit {

  constructor(private route: ActivatedRoute, private crudService: CrudService) { }


  currentEmployee: any = null;

  ngOnInit(): void {
    this.route.params.subscribe(params =>{  //here we got an object sent from url path
      this.currentEmployee = params;
      console.log(this.currentEmployee);
    })
  }


  update(){
    let newRecord = {};
    newRecord = {
      name: this.currentEmployee.name,
      age: this.currentEmployee.age,
      address: this.currentEmployee.address
    }

    this.crudService.updateEmployee(this.currentEmployee.id, newRecord);
  }
}
