import { Privilege } from './../../../models/privilege';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { PrivilegeService } from 'src/app/services/privilege.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-privilige',
  templateUrl: './add-privilige.component.html',
  styleUrls: ['./add-privilige.component.css']
})
export class AddPriviligeComponent implements OnInit {

  errorMessage: string = '';

  privileges : Privilege[] = null;

  addPrivilige: FormGroup;

  constructor(
              private fb: FormBuilder, 
              private privilegeService: PrivilegeService,
              private router: Router
              ) { }

  ngOnInit(): void {
    this.addPrivilige = this.fb.group({
      code: new FormControl(null, [Validators.required]),
      description: new FormControl(null, Validators.required),
    });

    //get all privileges    
    this.getAllPrivileges();
  }

  add(){
    this.errorMessage = '';
    const pr : Privilege = {
      id : null,
      code : this.addPrivilige.get("code").value,
      description: this.addPrivilige.get("description").value
    }

    //check if code already exists in the table ??
    let checkCode: Privilege; 
    checkCode = this.privileges.find(x => x.code == pr.code);

    if(checkCode){
      this.errorMessage = `${pr.code} already exists in the table !!`;
    }else if(this.addPrivilige.get('code').value.length > 3){
      this.errorMessage = `Code Should be 3 characters !!`;
    }
    else{
      this.privilegeService.addPrivilege(pr).subscribe((res:any) => {
        console.log(res);
        if(!res.Error){
          alert("Privilege has Been Added !!");
          this.router.navigate(['/priviliges']);
        }else{
          alert(res.Message);
        }
        
      },
      err => {console.log(err); this.errorMessage = err.Message}
      );
    }
    
  }


  getAllPrivileges(){
    this.privilegeService.getPrivileges().subscribe((res: Privilege[]) => {
      console.log(res);
      this.privileges = res;
    })
  }


  getFormControl(name) {
    return this.addPrivilige.get(name);
  }


}
