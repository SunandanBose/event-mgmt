package com.event.controller;

import com.event.model.Event;
import com.event.model.User;
import com.event.model.UserEvent;
import com.event.service.EventService;
import com.event.service.UserEventService;
import com.event.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
public class UserController {

	@Autowired
	private UserService userService;
	@Autowired
	private UserEventService userEventService;
	@Autowired
	private EventService eventService;

	@PostMapping(value = "/users")
	public User create(@RequestBody User user){
		return userService.create(user);
	}
	
	@GetMapping(value = "/users/{id}")
	public User fetchUser(@PathVariable(value = "id") Integer userId){
		return userService.getUser(userId).get();
	}


}
