import { BudgetItem } from './../shared/models/budget-item.model';
import { Component, Inject, Input, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-edit-item',
  templateUrl: './edit-item.component.html',
  styleUrls: ['./edit-item.component.scss']
})
export class EditItemComponent implements OnInit {


  constructor(
    public dialogRef: MatDialogRef<EditItemComponent>,
    @Inject(MAT_DIALOG_DATA) public item : BudgetItem
  ) { }

  ngOnInit(): void {
  }

  onSubmitted(upadatedItem: BudgetItem){
    //here we send updated data into onCardClickList() presented in budgetList compoenent
    this.dialogRef.close(upadatedItem); 
  }
}
