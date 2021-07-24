import { Injectable } from '@angular/core';

import { HttpClient } from "@angular/common/http";
import { Observable } from 'rxjs';
import { Todo } from '../Model/Todo';

@Injectable({
  providedIn: 'root'
})
export class TodoService {

  constructor(private http : HttpClient) { }
  
  getTodosUrl(limit : number) : Observable<Todo[]>{
    return this.http.get<Todo[]>('https://jsonplaceholder.typicode.com/todos?_limit=' + limit);
  }

  delete(id:number){
    return this.http.delete('https://jsonplaceholder.typicode.com/todos/' + id);
  }

  update(dataToBeUpdated:Todo){
    return this.http.put("https://jsonplaceholder.typicode.com/todos/" + dataToBeUpdated.id,dataToBeUpdated);
  }

  add(dataToBeUpdated:Todo){
    return this.http.post("https://jsonplaceholder.typicode.com/todos",dataToBeUpdated);
  }
}
