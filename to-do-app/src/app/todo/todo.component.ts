import { Component, OnInit } from '@angular/core';

import { TodoService } from "../services/todo.service"

import { Todo } from "../Model/Todo";
@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {

  todo : Todo[];

  constructor(private todo_list:TodoService ) { }

  ngOnInit(): void {
    this.todo_list.getTodosUrl(5).subscribe((result)=>{
      this.todo = result;
      console.log(this.todo)
    })
  }

  toggleTodo(todo1:any){
    this.todo=this.todo.map(item=> {
      if(todo1.id == item.id)
        item.completed = !todo1.completed;
      return item
    }); 
  }

  deleteTodo(todo1:any){
    this.todo=this.todo.filter(item=> {
      return item.id != todo1.id;
    }); 
  }

  addTodo(item:Todo){
    this.todo_list.add(item).subscribe(()=>{
      console.log(item);
      this.todo.push(item);
    });
  }
}
