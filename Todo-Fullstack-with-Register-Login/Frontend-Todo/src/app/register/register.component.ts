import { User } from './../shared/user';
import { UserService } from './../user.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  user:User=new User();
  constructor(private userService:UserService,
              private router:Router) { }

  ngOnInit(): void {
  }


  save(){
    this.userService.signUp(this.user)
    .subscribe(
      data=>console.log(data),
      error=>console.log(error)
    )
    this.user=new User();
    this.router.navigate(['/login']);
  }
  onSubmit(){
    this.save();
  }

}
