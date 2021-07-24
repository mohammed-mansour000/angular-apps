import { Component, OnInit } from '@angular/core';
import { FormGroup,FormControl } from "@angular/forms";

import { RestaService } from "../resta.service";

@Component({
  selector: 'app-add-resta',
  templateUrl: './add-resta.component.html',
  styleUrls: ['./add-resta.component.css']
})
export class AddRestaComponent implements OnInit {

  addResta = new FormGroup({

    name: new FormControl(''),
    email: new FormControl(''),
    address: new FormControl('')

  })

  alert:boolean = false;

  constructor(private resta:RestaService) { }

  ngOnInit(): void {
    
  }

  collectResta(){
    //console.log(this.addResta.value);
    this.resta.saveResta(this.addResta.value).subscribe((result)=>{
      console.log("result is here ",result)
      this.alert = true; //set alert to be shown
      this.addResta.reset({}); //clear form's inputs
    });
   
  }

  closeAlert(){
    this.alert = false;
  }

}
