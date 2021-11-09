import { RoleService } from './../../../services/role.service';
import { Role } from './../../../models/role';
import { Component, OnInit } from '@angular/core';
import { PrivilegeService } from 'src/app/services/privilege.service';
import { Privilege } from 'src/app/models/privilege';

@Component({
  selector: 'app-roles',
  templateUrl: './roles.component.html',
  styleUrls: ['./roles.component.css']
})
export class RolesComponent implements OnInit {

  roles : Role[] = null;
  privileges : Privilege[] = null;
  roleExist: boolean;

  constructor(private privilegeService: PrivilegeService, private roleService: RoleService) { }

  ngOnInit(): void {
    this.getAllRoles();
  }

  getAllPrivileges(){
    this.privilegeService.getPrivileges().subscribe((res: Privilege[]) => {
      console.log(res);
      this.privileges = res;
    })
  }

  delete(roleId: number){
    console.log(roleId);
    if(confirm("Are you sure you want to delete !")){
      this.roleService.deleteRole(roleId).subscribe((res: any) =>{
        if(!res.Error){
          this.getAllRoles();
        }else{
          alert(res.Message);
        }
      },
      err => {alert(err.Message)}
      );
    }
  }

  getAllRoles(){
    this.roleService.getRoles().subscribe((res: Role[]) => {
      console.log(res)
      if(res.length != 0){
        this.roleExist = true;
      }else{
        this.roleExist = false;
      }
      this.roles = res;
    })
  }

}
