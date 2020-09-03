import { Todo } from './../shared/todo';
import { TodoService } from './../todo.service';
import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-update-todo',
  templateUrl: './update-todo.component.html',
})
export class UpdateTodoComponent implements OnInit {

  id:number;
  todo:Todo;
  submitted=false;
  constructor(private todoService:TodoService,
              private router:Router,
              private route:ActivatedRoute){}

  ngOnInit(){
    this.todo=new Todo();
    this.id=this.route.snapshot.params['id'];
    this.todoService.getTodo(this.id)
    .subscribe(data=>{
      console.log(data)
      this.todo=data
    }, error => console.log(error)
    );

  }
onSubmit(){
  this.todoService.updateTodo(this.id,this.todo)
  .subscribe(data => console.log(data), error => console.log(error));
  this.todo=new Todo();
  this.router.navigate(['/todos']);
  this.submitted=true;
}

}
