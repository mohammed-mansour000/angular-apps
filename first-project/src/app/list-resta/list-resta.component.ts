import { Component, OnInit } from '@angular/core';
import { RestaService } from "../resta.service";


@Component({
  selector: 'app-list-resta',
  templateUrl: './list-resta.component.html',
  styleUrls: ['./list-resta.component.css']
})
export class ListRestaComponent implements OnInit {

  constructor( private resta:RestaService ) {}

  collections:any = [];

  ngOnInit(): void {
    this.resta.getList().subscribe((result)=>{
      console.log(result);
      this.collections = result;
    });
  }

  delete(itemID:number){
    if(confirm("Do you really want to delete?"))
    {
      this.collections = this.collections.filter(f => f.id !== itemID)
      this.resta.deleteResta(itemID).subscribe((result)=>{
        console.log(result);
      })
    }
   
  }

}
