import { CrudService } from './services/crud.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'firebase3';

  employee: any[] = [];

  employeeName : string;
  employeeAge : number;
  employeeAddrress : string;

  constructor(private crudService: CrudService){  }
  

  ngOnInit(): void {
    this.get();  
  }



  create(){
    let record = {};
    record = {
      name: this.employeeName,
      age: this.employeeAge,
      address: this.employeeAddrress
    }
    this.crudService.createEmployee(record).then(res =>{
      console.log(res);
      alert("your data has been added");
    }).catch(error => {
      console.log(error);
    });
  }

  get(){
    this.crudService.getEmployee().subscribe(res => { //we need to map the res to our data
      this.employee = res.map(e =>{
        return{
          id: e.payload.doc.id,
          name: e.payload.doc.data()['name'],
          address: e.payload.doc.data()['address'],
          age: e.payload.doc.data()['age'],
        }
      })
     // console.log(this.employee);
    })
  }


  delete(id){
    if(confirm("are you sure you want to delete")){
      this.crudService.deleteEmployee(id);
    }
  }

}
