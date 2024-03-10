import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Todo } from './models/todo';
import { FormsModule } from '@angular/forms';
import { DecimalPipe } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, FormsModule, DecimalPipe],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'ToDoList';

  task:string = "";
  completed:boolean = false;
  duration:number = 60;

  formTodo:Todo = {
    task: "",
    completed: false,
    duration: 60
  }

  list:Todo[] = [
    {
      task: "example",
      completed: true,
      duration: 60
    },
    {
      task: "example 2",
      completed: false,
      duration: 5
    },
    {
      task: "example 3",
      completed: true,
      duration: 120
    },
    {
      task: "example 4",
      completed: false,
      duration: 15
    }
  ];

  MarkComplete(targetTask:Todo):void {
    targetTask.completed = true;
  }

  RemoveTask(targetTask:Todo):void {
    let index:number = this.list.findIndex(t => t == targetTask);
    this.list.splice(index, 1);
  }

  AddTask():void {
    let result:Todo = {... this.formTodo};
    result.completed = false;
    this.list.push(result);
    this.formTodo = {} as Todo;
  }
}
