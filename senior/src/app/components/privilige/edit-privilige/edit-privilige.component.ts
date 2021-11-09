import { Privilege } from './../../../models/privilege';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { PrivilegeService } from 'src/app/services/privilege.service';

@Component({
  selector: 'app-edit-privilige',
  templateUrl: './edit-privilige.component.html',
  styleUrls: ['./edit-privilige.component.css']
})
export class EditPriviligeComponent implements OnInit {

  editPrivilige: FormGroup;
  privilegeId: number;
  privilege: Privilege;
  errorMessage: string = '';
  privileges : Privilege[] = null;

  constructor(
              private fb: FormBuilder,
              private activatedRoute: ActivatedRoute,
              private privilegeService: PrivilegeService,
              private router: Router
              ) { 
    this.privilegeId = this.activatedRoute.snapshot.params['privilegeId'];
    console.log(this.privilegeId)
  }

  ngOnInit(): void {
    this.editPrivilige = this.fb.group({
      code: new FormControl(null, [Validators.required]),
      description: new FormControl(null, Validators.required),
    });

    //get one privilege 
    this.getOnePrivilege(this.privilegeId);
    //get all privileges    
    this.getAllPrivileges();
  }

  edit(){
    this.errorMessage = '';
    const pr : Privilege = {
      id : null,
      code : this.editPrivilige.get('code').value,
      description: this.editPrivilige.get('description').value
    }

    //make an array privilege cotains all privileges except this privilege
    let checkCodeArray: Privilege[]; 
    checkCodeArray = this.privileges.filter(item => item.id != this.privilegeId);
    console.log(checkCodeArray);

    //make object privilege to check if code is already existed
    let checkCode: Privilege;
    checkCode = checkCodeArray.find(x => x.code == this.editPrivilige.get('code').value);
    console.log(checkCode);

    //check if code already exists in the table ??
    if(checkCode){
      this.errorMessage = `${pr.code} already exists in the table !!`;
    }else if(this.editPrivilige.get('code').value.length > 3){
      this.errorMessage = `Code Should be 3 characters !!`;
    }
    else{
      console.log("test", pr)
      this.privilegeService.editPrivilege(pr, this.privilegeId).subscribe((res:any) => {
        if(!res.Error){
          alert("Privilege has Been Updated !!");
          this.router.navigate(['/priviliges']);
        }else{
          alert(res.Message);
        }
   
      },
      err => {console.log(err); this.errorMessage = err.Message}
      );
    }
  }

  getFormControl(name) {
    return this.editPrivilige.get(name);
  }

  getOnePrivilege(id: number){
     this.privilegeService.getOnePrivilege(id).subscribe((res: Privilege) =>{
       if(res){
        this.privilege = res[0];
        console.log(this.privilege)
        this.editPrivilige.get('code').setValue(this.privilege.code);
        this.editPrivilige.get('description').setValue(this.privilege.description);
       }
     });
  }

  getAllPrivileges(){
    this.privilegeService.getPrivileges().subscribe((res: Privilege[]) => {
      console.log(res);
      this.privileges = res;
    })
  }
}
