import { RoleService } from './../../../services/role.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Privilege } from 'src/app/models/privilege';
import { Role } from 'src/app/models/role';
import { PrivilegeService } from 'src/app/services/privilege.service';

@Component({
  selector: 'app-edit-role',
  templateUrl: './edit-role.component.html',
  styleUrls: ['./edit-role.component.css']
})
export class EditRoleComponent implements OnInit {

  roleId: number;
  
  errorMessage: string = '';

  errorMessageForPrivilege: string = '';

  privileges : Privilege[] = null;

  editRole: FormGroup;

  selectedPrivileges : Privilege[] = [];

  role: Role;

  constructor(
    private fb: FormBuilder,
    private activatedRoute: ActivatedRoute,
    private privilegeService: PrivilegeService,
    private roleService: RoleService,
    private router: Router
    ) { 
      this.roleId = this.activatedRoute.snapshot.params['roleId'];
      console.log(this.roleId)
}

  ngOnInit(): void {
    this.editRole = this.fb.group({
      title: new FormControl(null, [Validators.required]),
      description: new FormControl(null, Validators.required),
      //privilegeSelected: new FormControl('', Validators.required),
    });

    //get all privileges    
    this.getAllPrivileges();

    //get the role to edit and set it's values in inputs
    this.getOneRole(this.roleId);
  }

  getAllPrivileges(){
    this.privilegeService.getPrivileges().subscribe((res: Privilege[]) => {
      console.log(res);
      this.privileges = res;
    })
  }

  getOneRole(id: number){
    this.roleService.getOneRole(id).subscribe((res: Role) =>{
      if(res){
       this.role = res[0];
       console.log(this.role);
       this.editRole.get('title').setValue(this.role.title);
       this.editRole.get('description').setValue(this.role.description);
       this.selectedPrivileges = res[0].privileges;
      }
    });
 }

 edit(){
   let r : Role = {
     id: this.roleId,
     title: this.editRole.get("title").value,
     description: this.editRole.get('description').value,
     privileges: this.selectedPrivileges
   }
  this.roleService.editRole(r).subscribe((res:any) => {
    if(!res.Error){
      this.router.navigate(['/roles']);
    }else{
      alert(res.Message);
    }

  },
  err => {alert(err.Message);}
  );
 }

  getFormControl(name) {
    return this.editRole.get(name);
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
