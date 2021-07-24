import { Component, Input, OnInit, Output,EventEmitter  } from '@angular/core';

import { Todo } from "../Model/Todo";
import { TodoService } from '../services/todo.service';

@Component({
  selector: 'app-child-todo',
  templateUrl: './child-todo.component.html',
  styleUrls: ['./child-todo.component.css']
})
export class ChildTodoComponent implements OnInit {

  @Input() todo:Todo;
  @Output() toggleEvent = new EventEmitter();
  @Output() deleteEvent = new EventEmitter();
  

  constructor(private todo_service:TodoService) {}

  ngOnInit(): void {
   
  }

  toggle(todo:Todo){
  
    //this.toggleEvent.emit(todo);
    //console.log(todo)
    this.toggleEvent.emit(todo);
    this.todo_service.update(this.todo).subscribe(()=>{
      console.log(todo)
    })
  }

  delete(todo:Todo){
  
    //this.deleteEvent.emit(todo);
    //console.log(todo)
    this.todo_service.delete(this.todo.id).subscribe(()=>{
      this.deleteEvent.emit(todo);
    });
  }




}
