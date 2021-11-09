import { RoleService } from './../../../services/role.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Privilege } from 'src/app/models/privilege';
import { Role } from 'src/app/models/role';
import { PrivilegeService } from 'src/app/services/privilege.service';

@Component({
  selector: 'app-add-role',
  templateUrl: './add-role.component.html',
  styleUrls: ['./add-role.component.css']
})
export class AddRoleComponent implements OnInit {

  errorMessage: string = '';
  
  errorMessageForPrivilege: string = '';

  privileges : Privilege[] = null;

  addRole: FormGroup;

  selectedPrivileges : Privilege[] = [];


  constructor(
              private fb: FormBuilder, 
              private privilegeService: PrivilegeService,
              private roleService: RoleService,
              private router: Router
            ) { }

  ngOnInit(): void {
    this.addRole = this.fb.group({
      title: new FormControl(null, [Validators.required]),
      description: new FormControl(null, Validators.required),
      privilegeSelected: new FormControl('', Validators.required),
    });

    //get all privileges    
    this.getAllPrivileges();

  }


  getAllPrivileges(){
    this.privilegeService.getPrivileges().subscribe((res: Privilege[]) => {
      console.log(res);
      this.privileges = res;
    })
  }

  add(){
    this.errorMessageForPrivilege = "";
    if(this.selectedPrivileges.length == 0){
      this.errorMessageForPrivilege = "Please choose at least one privilege";
    }else{
      console.log("its ok");
      const r : Role = {
        id : null,
        title : this.addRole.get("title").value,
        description: this.addRole.get("description").value,
        privileges: this.selectedPrivileges
      };
      this.roleService.addRole(r).subscribe((res: any) => {
        console.log(res)
        if(!res.Error){
          this.router.navigate(['/roles']);
        }else{
          alert(res.Message);
        }
      })
    }
  }

  getFormControl(name) {
    return this.addRole.get(name);
  }

  addPrivileges(){
    this.errorMessageForPrivilege = "";
    let privilegeId = this.getFormControl("privilegeSelected").value;
    if(privilegeId != ""){
      let privilegeItem: Privilege = this.privileges.find(e => e.id == privilegeId);
      if(!this.selectedPrivileges.find(e => e.id == privilegeItem.id)){
        this.selectedPrivileges.push(privilegeItem);
        console.log(this.selectedPrivileges);
      }else{
        console.log("already exists");
      }
      
    }
  }

  removeFromPrivileges(id: number){
   this.selectedPrivileges.forEach((element,index)=>{
    if(element.id==id) this.selectedPrivileges.splice(index,1);
    });
  }
}
