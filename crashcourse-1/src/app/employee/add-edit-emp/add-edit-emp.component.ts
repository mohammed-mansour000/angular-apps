import { Component, Input, OnInit } from '@angular/core';
import { SharedServiceService } from 'src/app/services/shared-service.service';

@Component({
  selector: 'app-add-edit-emp',
  templateUrl: './add-edit-emp.component.html',
  styleUrls: ['./add-edit-emp.component.css']
})
export class AddEditEmpComponent implements OnInit {

  @Input() emp: any;

  EmployeeId: number;
  EmployeeName: string;
  DateOfJoining: string;
  Department: string;
  PhotoFileName: string;
  PhotoFilePath: string;

  departmentList : any = [];
  
  constructor(private sharedService: SharedServiceService) { }


  ngOnInit(): void {
    this.loadDepartments();
  }


  loadDepartments(){
    this.sharedService.getAllDepartmentNames().subscribe((data: any) => {
      this.departmentList = data;
      this.EmployeeId = this.emp.EmployeeId;
      this.EmployeeName = this.emp.EmployeeName;
      this.DateOfJoining = this.emp.DateOfJoining;
      this.Department = this.emp.Department;
      this.PhotoFileName = this.emp.PhotoFileName;
      this.PhotoFilePath = this.sharedService.photoUrl + this.PhotoFileName;
    })
  }

  addEmployee(){
    var data = {
      EmployeeId: this.EmployeeId,
      EmployeeName: this.EmployeeName,
      DateOfJoining: this.DateOfJoining,
      Department: this.Department,
      PhotoFileName: this.PhotoFileName
    }
    this.sharedService.addEmployee(data).subscribe(res =>{
      alert(res.toString());
    });
  }

  editEmployee(){
    var data = {
      EmployeeId: this.EmployeeId,
      EmployeeName: this.EmployeeName,
      DateOfJoining: this.DateOfJoining,
      Department: this.Department,
      PhotoFileName: this.PhotoFileName
    }
    this.sharedService.updateEmployee(data).subscribe(res =>{
      alert(res.toString());
    });
  }

  uploadPhoto(event){
    var file = event.target.files[0];
    const formData : FormData = new FormData();
    formData.append('uploadedFile', file, file.name)

    this.sharedService.uploadPhoto(formData).subscribe((res: any) => {
      this.PhotoFileName = res.toString();
      this.PhotoFilePath = this.sharedService.photoUrl + this.PhotoFileName;
      console.log("PhotoFileName", this.PhotoFileName);
      console.log("PhotoFilePath", this.PhotoFilePath);
    });
  }
}
