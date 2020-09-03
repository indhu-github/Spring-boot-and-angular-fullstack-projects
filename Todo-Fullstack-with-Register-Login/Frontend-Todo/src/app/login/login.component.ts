import { UserService } from './../user.service';
import { Component, OnInit } from '@angular/core';
import { User } from './../shared/user';
import { Router } from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  user:User=new User();
  error=null;
  data=null;
  constructor(private userService:UserService,
              private router:Router) { }

  ngOnInit(): void {
  }

  onSubmit(){
    this.userService.login(this.user)
    .subscribe(
      data=>this.data=data,
      error=> this.error=error
     // error=> this.error=error
    )
    this.user=new User();
    //console.log("data",this.data);
    //console.log("error",this.error);

    //if(error.status==200)
    if(this.data.status==200){
      this.router.navigate(['/todos']);
    }
    else{
      this.router.navigate(['/login']);
    }
  }
}
