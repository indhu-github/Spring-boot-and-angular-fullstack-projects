import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService{
  private baseUrl='http://localhost:8080/users';

  constructor(private http:HttpClient){}

  signUp(user:Object):Observable<Object>{
    return this.http.post(`${this.baseUrl}`,user);
  }

  login(user:Object):Observable<Object>{
    return this.http.post(`${this.baseUrl}/login`,user);
  }
}
