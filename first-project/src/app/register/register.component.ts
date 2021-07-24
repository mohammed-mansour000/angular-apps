import { Component, OnInit } from '@angular/core';

import { FormGroup,FormControl } from "@angular/forms";

import { RestaService } from "../resta.service";

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  regiterForm = new FormGroup({

    name: new FormControl(''),
    email: new FormControl(''),
    password: new FormControl('')

  })

  alert:boolean = false;

  constructor(private resta:RestaService) { }

  ngOnInit(): void {
    
  }

  collectResta(){
    // console.log(this.regiterForm.value);
    this.resta.registerResta(this.regiterForm.value).subscribe((result)=>{
      console.log(result);
      this.alert = true;
    })
  }

  closeAlert(){
    this.alert = false;
  }

}
