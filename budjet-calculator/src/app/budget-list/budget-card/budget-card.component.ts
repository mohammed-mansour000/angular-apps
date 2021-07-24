import { BudgetItem } from './../../shared/models/budget-item.model';
import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-budget-card',
  templateUrl: './budget-card.component.html',
  styleUrls: ['./budget-card.component.scss']
})
export class BudgetCardComponent implements OnInit {

  @Input() isIncome: boolean;
  @Input() item: BudgetItem;
  @Output() deleteEmitterFromCard: EventEmitter<any> = new EventEmitter<any>();
  @Output() cardClick: EventEmitter<any> = new EventEmitter<any>();

  constructor() { }

  ngOnInit(): void {
  }

  deleteItemFromCard(){
    this.deleteEmitterFromCard.emit();
  }

  onCardClick(){
    this.cardClick.emit();
  }
}
