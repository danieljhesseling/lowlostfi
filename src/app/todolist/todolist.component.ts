import { Component } from '@angular/core';


interface Todo {
  text: string;
  completed: boolean;
}

@Component({
  selector: 'app-todo-list',
  templateUrl: './todolist.component.html',
  styleUrls: ['./todolist.component.css']
})
export class TodolistComponent {
  todos: Todo[] = [];

  newTodo: string = '';

  ngOnInit() {
    const savedTodos = localStorage.getItem('todos');
    if (savedTodos) {
      this.todos = JSON.parse(savedTodos);
    }
  }

  addTodo() {
    if (this.newTodo.trim() !== '') {
      this.todos.push({ text: this.newTodo.trim(), completed: false });
      this.newTodo = '';

      localStorage.setItem('todos', JSON.stringify(this.todos));
    }
  }

  deleteCompleted() {
    this.todos = this.todos.filter(todo => !todo.completed);
    localStorage.setItem('todos', JSON.stringify(this.todos));
  }
}

