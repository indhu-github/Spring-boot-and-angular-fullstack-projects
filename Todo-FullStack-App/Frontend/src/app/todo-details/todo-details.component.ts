import { TodoService } from './../todo.service';
import { Todo } from './../shared/todo';
import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-todo-details',
  templateUrl: './todo-details.component.html',
  styleUrls: ['./todo-details.component.css']
})
export class TodoDetailsComponent implements OnInit {

    id:number;
    todo:Todo;
  constructor(private todoService:TodoService,
              private router:Router,
              private route:ActivatedRoute) { }

  ngOnInit(){
    this.todo=new Todo();
    this.id=this.route.snapshot.params['id'];
    this.todoService.getTodo(this.id)
    .subscribe(data=>{
      console.log(data)
      this.todo=data
    },error=>console.log(error));
  }

  list(){
    this.router.navigate(['todos']);
  }

}
