import { Component, inject } from '@angular/core';
import { TodoComponent } from '../todo/todo.component';
import { Todo } from '../todo';
import { TodoService } from '../todo.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-todo-list',
  standalone: true,
  imports: [
    CommonModule,
    TodoComponent
  ],
  templateUrl: './todo-list.component.html',
  styleUrl: './todo-list.component.scss'
})
export class TodoListComponent {
  todoList: Todo[] = [];
  todoService: TodoService = inject(TodoService);

  constructor() {
    this.todoList = this.todoService.getTodoList();
  }

  addTodo(event: SubmitEvent, text: string) {
    event.preventDefault();
    this.todoList = this.todoService.addTodo(text);

    console.log(this.todoList)
  }
} 
