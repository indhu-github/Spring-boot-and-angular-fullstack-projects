package com.example.demo.controller;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import javax.validation.Valid;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.model.Todo;
import com.example.demo.repository.TodoRepository;

import exception.ResourceNotFoundException;

@CrossOrigin(origins = "http://localhost:4200")
@RestController
@RequestMapping("/api/v1")
public class TodoController {
	
	@Autowired
	public TodoRepository todoRepository;
	
	 @GetMapping("/todos")
	 public List<Todo> getAllTodos() {
		 return todoRepository.findAll();
	 }
	 
	  @GetMapping("/todos/{id}")
	    public ResponseEntity<Todo> getTodoById(@PathVariable(value = "id") Long todoId)
	        throws ResourceNotFoundException {
	        Todo todo = todoRepository.findById(todoId)
	          .orElseThrow(() -> new ResourceNotFoundException("Todo not found for this id :: " + todoId));
	        return ResponseEntity.ok().body(todo);
	    }
	  
	  
	  @PostMapping("/todos")
	    public Todo createTodo(@RequestBody Todo todo) {
	        return todoRepository.save(todo);
	    }
	  
	  
	  @PutMapping("/todos/{id}")
	    public ResponseEntity<Todo> updateTodo(@PathVariable(value = "id") Long todoId,
	         @Valid @RequestBody Todo todoDetails) throws ResourceNotFoundException {
	        Todo todo = todoRepository.findById(todoId)
	        .orElseThrow(() -> new ResourceNotFoundException("Todo not found for this id :: " + todoId));

	        todo.setTitle(todoDetails.getTitle());
	        todo.setDescription(todoDetails.getDescription());
	        
	        final Todo updatedTodo = todoRepository.save(todo);
	        return ResponseEntity.ok(updatedTodo);
	    }

	    @DeleteMapping("/todos/{id}")
	    public Map<String, Boolean> deleteTodo(@PathVariable(value = "id") Long todoId)
	         throws ResourceNotFoundException {
	        Todo todo = todoRepository.findById(todoId)
	       .orElseThrow(() -> new ResourceNotFoundException("Todo not found for this id :: " + todoId));

	        todoRepository.delete(todo);
	        Map<String, Boolean> response = new HashMap<>();
	        response.put("deleted", Boolean.TRUE);
	        return response;
	    }
}
