import { EditItemComponent } from './../edit-item/edit-item.component';
import { MatDialog } from '@angular/material/dialog';
import { Component, Input, OnInit, EventEmitter, Output } from '@angular/core';
import { BudgetItem } from '../shared/models/budget-item.model';

@Component({
  selector: 'app-budget-list',
  templateUrl: './budget-list.component.html',
  styleUrls: ['./budget-list.component.scss']
})


export class BudgetListComponent implements OnInit {

  @Input() budgetItems: BudgetItem[];
  @Output() deleteEmitterFromList : EventEmitter<BudgetItem> = new EventEmitter<BudgetItem>();
  @Output() update : EventEmitter<any> = new EventEmitter<any>(); //this is for update totoalBudget bug

  constructor(public dialog: MatDialog) { }

  ngOnInit(): void {
  }

  deleteFromList(item: BudgetItem){
    this.deleteEmitterFromList.emit(item);
  }

  onCardClickList(item: BudgetItem){
    //here show edit modal
    //add the component you want to show in dialog with some properties
    const dialogRef = this.dialog.open(EditItemComponent,{
      width: "580px",
      data: item
    });

    //afterclosed returns observable 
    dialogRef.afterClosed().subscribe(res => {
      //console.log(res)

      if(res){  //check if result has a value

        //replace the item value with updated value 
        //let index = this.budgetItems.indexOf(item);
        //this.budgetItems[index] = res;

        this.update.emit({
          old: item,
          new: res
        })
      }
    })
  }
}

export interface UpdateEvent{
  old: BudgetItem;
  new: BudgetItem;
}