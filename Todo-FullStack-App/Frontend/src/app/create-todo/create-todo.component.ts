import { Todo } from './../shared/todo';
import { TodoService } from './../todo.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './create-todo.component.html',
  styleUrls: ['./create-todo.component.css']
})
export class CreateTodoComponent implements OnInit {
  todo:Todo=new Todo();
  submitted=false;

  constructor(private todoService:TodoService,
              private router:Router) { }

  ngOnInit(){
  }

  save(){
    this.todoService.createTodo(this.todo)
    .subscribe(
      data=>console.log(data),
      error=>console.log(error)
    );
    this.todo=new Todo();
    this.router.navigate(['/todos']);
  }

  onSubmit(){
    this.submitted=true;
    this.save();
  }

}
