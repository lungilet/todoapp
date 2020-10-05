import { Injectable } from '@angular/core';
import { Todo } from '../interface/todo';


@Injectable({
  providedIn: 'root'
})
export class TodoService {

  // automatic incrementing of ids
  lastId: number = 0;

  // To do class
  toDos: Todo[] = [];

  constructor() { }

   // Simulate POST /toDos
   addTodo(todo: Todo): TodoService {
    if (!todo.id) {
      todo.id = ++this.lastId;
    }
    this.toDos.push(todo);
    return this;
  }

  // Simulate DELETE /toDos/:id
  deleteTodoById(id: number): TodoService {
    this.toDos = this.toDos
      .filter(todo => todo.id !== id);
    return this;
  }

  // Simulate PUT /toDos/:id
  updateTodoById(id: number, values: Object = {}): Todo {
    let todo = this.getTodoById(id);
    if (!todo) {
      return null;
    }
    Object.assign(todo, values);
    return todo;
  }

  // Simulate GET /toDos
  getAllToDos(): Todo[] {
    return this.toDos;
  }

  // Simulate GET /toDos/:id
  getTodoById(id: number): Todo {
    return this.toDos
      .filter(todo => todo.id === id)
      .pop();
  }

  // Toggle todo complete
  toggleTodoComplete(todo: Todo){
    let updatedTodo = this.updateTodoById(todo.id, {
      complete: !todo.complete
    });
    return updatedTodo;
  }

}
