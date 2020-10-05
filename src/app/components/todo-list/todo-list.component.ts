import { Component, OnInit } from '@angular/core';
import { Todo } from 'src/app/interface/todo';
import { TodoService } from 'src/app/services/todo.service';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss']
})
export class TodoListComponent implements OnInit {

  completed: boolean = false;
  newTodo: Todo = new Todo();

  // Ask Angular DI system to inject the dependency
  // associated with the dependency injection token `TodoService`
  constructor(private todoDataService: TodoService) {
  }

  ngOnInit(): void {
  }


  // This function is for creating the To do task
  addTodo() {
    this.todoDataService.addTodo(this.newTodo);
    this.newTodo = new Todo();
  }

  // This function is for determine if the task has been done or not
  toggleTodoComplete(todo) {
    this.todoDataService.toggleTodoComplete(todo);
  }

  // To remove the task if not being needed anymore
  removeTodo(todo) {
    this.todoDataService.deleteTodoById(todo.id);
  }

  // Get the list of To dos
  get toDos() {
    return this.todoDataService.getAllToDos();
  }

}
