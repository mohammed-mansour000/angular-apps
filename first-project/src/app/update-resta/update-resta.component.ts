import { Component, OnInit } from '@angular/core';

import { FormGroup,FormControl } from "@angular/forms";

import { RestaService } from "../resta.service";

import { ActivatedRoute } from '@angular/router'; //to get value sent by get url

@Component({
  selector: 'app-update-resta',
  templateUrl: './update-resta.component.html',
  styleUrls: ['./update-resta.component.css']
})
export class UpdateRestaComponent implements OnInit {

  editResta = new FormGroup({

    name: new FormControl(''),
    email: new FormControl(''),
    address: new FormControl('')

  })

  //collection:any = {}

  alert:boolean = false;

  id:number = this.router.snapshot.params.id;

  constructor(private router:ActivatedRoute, private resta:RestaService) { }

  ngOnInit(): void {
    console.log(this.router.snapshot.params.id); //get value from url 
    this.resta.getForCertainResta(this.router.snapshot.params.id).subscribe((result)=>{
      console.log(result);

      //there are 2 ways to do that, this is more complicated way

      this.editResta = new FormGroup({
      
        name: new FormControl(result['name']),
        email: new FormControl(result['email']),
        address: new FormControl(result['address'])
    
      })
    })
  }


  updateThisResta(){
   
    this.resta.updateResta(this.editResta.value,this.router.snapshot.params.id).subscribe((result)=>{
      console.log(result);
      this.alert = true;
    })
  
}

  closeAlert(){
    this.alert = false;
  }

}
