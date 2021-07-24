import { Component, OnInit } from '@angular/core';
import { SharedServiceService } from 'src/app/services/shared-service.service';

@Component({
  selector: 'app-show-emp',
  templateUrl: './show-emp.component.html',
  styleUrls: ['./show-emp.component.css']
})
export class ShowEmpComponent implements OnInit {

  employeesList: any[];
  modalTitle: String = "";
  activatedAddEditEmpComp: boolean = false;
  emp: any;

  constructor(private sharedService: SharedServiceService) { }

  ngOnInit(): void {
    this.refreshEmpList();
  }

  refreshEmpList(){
    this.sharedService.getEmployees().subscribe((res: any[]) => {
      this.employeesList = res;
      console.log(this.employeesList)
    })
  }

  addEmp(){
    this.emp = {
      EmployeeId: 0,
      EmployeeName: "",
      DateOfJoining: "",
      Department: "",
      PhotoFileName: "user.png"
    }

    this.modalTitle = "Add Employee";
    this.activatedAddEditEmpComp = true;
  }


  editEmp(empItem: any){
    this.emp = empItem;
    this.modalTitle = "Edit Employee";
    this.activatedAddEditEmpComp = true;
  }


  deleteEmp(empId: number){
    
    if(confirm("Are You Sure?")){
      this.sharedService.deleteEmployee(empId).subscribe((res: any) =>{
        alert(res.toString());
        this.refreshEmpList();
      });
    }
  }

  closeClick(){
    this.activatedAddEditEmpComp = false;
    this.refreshEmpList();
  }

}
