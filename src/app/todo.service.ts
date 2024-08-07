import { Injectable } from '@angular/core';
import { Todo } from './todo';

@Injectable({
  providedIn: 'root'
})
export class TodoService {

  private todoList: Todo[] = [];

  constructor() { }

  getTodoList() {
    return this.todoList;
  }

  addTodo(name: string) {
    this.todoList = [ 
      ...this.todoList, 
      {
        id: this.todoList.length + 1,
        name,
        isDone: false
      } 
    ];
    return this.todoList;
  }

  deleteTodo(id: number) {
    const findIndex = this.todoList.findIndex(todo => todo.id === id);
    
    if(findIndex === -1) return;

    this.todoList = [
      ...this.todoList.slice(0, findIndex),
      ...this.todoList.slice(findIndex + 1, this.todoList.length)
    ];

    return this.todoList;
  }

  setIsDone(index: number, bol: boolean) {
    this.todoList[index].isDone = bol;
    return this.todoList[index];
  }
}
