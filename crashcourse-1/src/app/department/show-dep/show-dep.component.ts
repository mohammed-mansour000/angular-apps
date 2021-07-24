import { Component, OnInit } from '@angular/core';
import { SharedServiceService } from 'src/app/services/shared-service.service';

@Component({
  selector: 'app-show-dep',
  templateUrl: './show-dep.component.html',
  styleUrls: ['./show-dep.component.css']
})
export class ShowDepComponent implements OnInit {

  departmentsList: any[];
  modalTitle: String = "";
  activatedAddEditDepComp: boolean = false;
  dep: any;

  departmentIdFilter: string = "";
  departmentNameFilter: string = "";
  departmentListWithoutFilter: any = [];

  constructor(private sharedService: SharedServiceService) { }

  ngOnInit(): void {
    this.refreshDepList();
  }

  refreshDepList(){
    this.sharedService.getDepartments().subscribe((res: any[]) => {
      this.departmentsList = res;
      console.log(this.departmentsList)

      this.departmentListWithoutFilter = res;
    })
  }

  addDep(){
    this.dep = {
      DepartmentId: 0,
      DepartmentName: ""
    }

    this.modalTitle = "Add Department";
    this.activatedAddEditDepComp = true;
  }


  editDep(depItem: any){
    this.dep = depItem;
    this.modalTitle = "Edit Department";
    this.activatedAddEditDepComp = true;
  }


  deleteDep(depId: number){
    
    if(confirm("Are You Sure?")){
      this.sharedService.deleteDepartment(depId).subscribe((res: any) =>{
        alert(res.toString());
        this.refreshDepList();
      });
    }
  }

  closeClick(){
    this.activatedAddEditDepComp = false;
    this.refreshDepList();
  }

  
  filterFn(){
    var  departmentIdFilter = this.departmentIdFilter;
    var  departmentNameFilter = this.departmentNameFilter;

    this.departmentsList = this.departmentListWithoutFilter.filter(el => {
      return el.DepartmentId.toString().toLowerCase().includes(
              departmentIdFilter.toString().trim().toLowerCase()
            )&&
            el.DepartmentName.toString().toLowerCase().includes(
              departmentNameFilter.toString().trim().toLowerCase()
            )
    });
    
  }

  sortResult(prop, asc){
    this.departmentsList = this.departmentListWithoutFilter.sort((a,b) => {
      if(asc){
        return (a[prop]>b[prop]) ? 1 : ((a[prop]<b[prop]) ? -1 : 0);
      }else{
        return (b[prop]>a[prop]) ? 1 : ((b[prop]<a[prop]) ? -1 : 0);
      }
    });
  }
}
