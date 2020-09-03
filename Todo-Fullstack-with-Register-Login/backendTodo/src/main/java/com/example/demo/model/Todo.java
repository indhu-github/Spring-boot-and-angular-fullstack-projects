package com.example.demo.model;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.ManyToOne;

@Entity
public class Todo {
    @Id
	@GeneratedValue(strategy = GenerationType.AUTO)       
	private long id;
	private String title;
	private String description;
	@ManyToOne
	private User user;
	
	public long getId() {
		return id;
	}
	public void setId(long id) {
		this.id = id;
	}
	public String getTitle() {
		return title;
	}
	public void setTitle(String title) {
		this.title = title;
	}
	public String getDescription() {
		return description;
	}
	public void setDescription(String description) {
		this.description = description;
	}
	public User getUser() {
		return user;
	}
	public void setUser(User user) {
		this.user = user;
	}
	public Todo(long id, String title, String description, User user) {
		super();
		this.id = id;
		this.title = title;
		this.description = description;
		this.user = user;
	}
	
		
}
