import { Component, Input, OnInit } from '@angular/core';
import { SharedServiceService } from 'src/app/services/shared-service.service';

@Component({
  selector: 'app-add-edit-dep',
  templateUrl: './add-edit-dep.component.html',
  styleUrls: ['./add-edit-dep.component.css']
})
export class AddEditDepComponent implements OnInit {

  @Input() dep: any;
  DepartmentId: number;
  DepartmentName: string;
  
  constructor(private sharedService: SharedServiceService) { }


  ngOnInit(): void {
    this.DepartmentId = this.dep.DepartmentId;
    this.DepartmentName = this.dep.DepartmentName;
  }

  addDepartment(){
    var data = {
      DepartmentId: this.DepartmentId,
      DepartmentName: this.DepartmentName
    }
    this.sharedService.addDepartment(data).subscribe(res =>{
      alert(res.toString());
    });
  }

  editDepartment(){
    var data = {
      DepartmentId: this.DepartmentId,
      DepartmentName: this.DepartmentName
    }
    this.sharedService.updateDepartment(data).subscribe(res =>{
      alert(res.toString());
    });
  }
}
