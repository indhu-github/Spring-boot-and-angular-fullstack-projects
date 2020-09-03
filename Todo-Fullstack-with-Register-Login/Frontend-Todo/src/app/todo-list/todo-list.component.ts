import { TodoService } from './../todo.service';
import { Observable } from 'rxjs';
import { Component, OnInit } from '@angular/core';
import {Todo} from '../shared/todo';
import { Router } from '@angular/router';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent implements OnInit {
  todos:Observable<Todo[]>;

  constructor(private todoService:TodoService,
              private router:Router) { }

  ngOnInit(){
    this.todos=this.todoService.getTodosList();
  }

  onDeleteTodo(id:number){
    this.todoService.deleteTodo(id)
    .subscribe(
      data=>{
        this.todos=this.todoService.getTodosList();
      },
      error=> console.log(error)
    );

  }

  onGetDetails(id:number){
    this.router.navigate(['details',id]);
  }

  updateTodo(id:number){
    this.router.navigate(['update',id]);
  }

}
