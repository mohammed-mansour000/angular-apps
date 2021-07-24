import { BudgetItem } from './../shared/models/budget-item.model';
import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-add-item',
  templateUrl: './add-item.component.html',
  styleUrls: ['./add-item.component.scss']
})
export class AddItemComponent implements OnInit {

  @Input() item: BudgetItem = new BudgetItem('', null);
  @Output() formSubmit : EventEmitter<BudgetItem> = new EventEmitter<BudgetItem>();
  @Input() isEdit: boolean = false;
  //isNewItem: boolean;
  constructor() { }

  ngOnInit(): void {
    // //if item has a value
    // if(this.item){
    //   //this means that an existing item object was passed into this component
    //   //therefore this is not a new item 
    //   this.isNewItem = false;
    // }else{
    //   this.isNewItem = true;
    //   this.item = new BudgetItem('', null); //in this case since we remove above initial value we need to set null value to avoid errors
    // }
  }

  addFunction(form: NgForm){
    //console.log(form)
    this.formSubmit.emit(form.value);
    this.item.amount = null;
    this.item.description = null;
  }

}
