import { UpdateEvent } from './../budget-list/budget-list.component';
import { Component, Input, OnInit } from '@angular/core';
import { BudgetItem } from '../shared/models/budget-item.model';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.scss']
})
export class MainPageComponent implements OnInit {

  @Input() budgetItems: BudgetItem[] = new Array<BudgetItem>();

  totalBudget: number = 0;

  constructor() { }

  ngOnInit(): void {
    // this.budgetItems.forEach(e => {
      
    // })
  }

  addItem(newItem: BudgetItem){
    this.budgetItems.push(newItem);
    this.totalBudget += newItem.amount; //incremet the amount added
    console.log(this.budgetItems)
  }

  deleteItemFromMain(item: BudgetItem){
    let index = this.budgetItems.indexOf(item); //get the index of that item in this array
    this.budgetItems.splice(index, 1);
    this.totalBudget -= item.amount;  //decrement the amount removed
  }

  updateItem(updatedEvent: UpdateEvent){
    //replace the item value with updated value 
    let index = this.budgetItems.indexOf(updatedEvent.old);
    this.budgetItems[index] = updatedEvent.new;

    //now update the totalBudget 
    this.totalBudget -= updatedEvent.old.amount;
    this.totalBudget += updatedEvent.new.amount;
  }

}
