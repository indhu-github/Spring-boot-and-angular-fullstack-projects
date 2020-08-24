import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TodoService {
  private baseUrl = 'http://localhost:8080/api/v1/todos';

  constructor(private http: HttpClient) { }

  getTodo(id: number): Observable<any> {
    return this.http.get(`${this.baseUrl}/${id}`);
  }

  createTodo(todo: Object): Observable<Object> {
    return this.http.post(`${this.baseUrl}`, todo);
  }

  updateTodo(id: number, value: any): Observable<Object> {
    return this.http.put(`${this.baseUrl}/${id}`, value);
  }

  deleteTodo(id: number): Observable<any> {
    return this.http.delete(`${this.baseUrl}/${id}`, { responseType: 'text' });
  }

  getTodosList(): Observable<any> {
    return this.http.get(`${this.baseUrl}`);
  }
}
