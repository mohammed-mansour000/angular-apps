import { Component, EventEmitter, OnInit, Output } from '@angular/core';

import { Todo } from "../Model/Todo";
 
@Component({
  selector: 'app-add-todo',
  templateUrl: './add-todo.component.html',
  styleUrls: ['./add-todo.component.css']
})
export class AddTodoComponent implements OnInit {

  title = "";

  @Output() addEvent = new EventEmitter();

  test(){
    alert(this.title);
    console.log(this.title);
  }
  constructor() {}

  ngOnInit(): void {
  }

  add(){
    let todo = new Todo( Math.floor(Math.random()), this.title, false)
    this.addEvent.emit(todo);
    this.title = "";
  }
}
