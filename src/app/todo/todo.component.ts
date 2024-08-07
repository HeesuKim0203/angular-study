import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { Todo } from '../todo';

@Component({
  selector: 'app-todo',
  standalone: true,
  imports: [
    CommonModule
  ],
  templateUrl: './todo.component.html',
  styleUrl: './todo.component.scss'
})
export class TodoComponent {
  @Input() todo!: Todo;
  

  onClickCheckBox() {
    
  }
}
