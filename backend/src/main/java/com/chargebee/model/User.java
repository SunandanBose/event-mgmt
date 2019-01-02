package com.chargebee.model;

import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.OneToMany;
import java.util.List;

@Entity
public class User {

	@Id
	private String username;
	
	private String password;

	private String role;

	@OneToMany
	private List<Event> evntList;

	public String getUsername() {
		return username;
	}

	public void setUsername(String username) {
		this.username = username;
	}

	public String getPassword() {
		return password;
	}

	public void setPassword(String password) {
		this.password = password;
	}

	public String getRole() {
		return role;
	}

	public void setRole(String role) {
		this.role = role;
	}


	public List<Event> getEvntList() {
		return evntList;
	}

	public void setEvntList(List<Event> evntList) {
		this.evntList = evntList;
	}
}
