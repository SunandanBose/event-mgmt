package com.chargebee.controller;

import com.chargebee.model.Event;
import com.chargebee.model.User;
import com.chargebee.service.EventService;
import com.chargebee.service.UserEventService;
import com.chargebee.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
public class UserController {

	@Autowired
	private UserEventService userEventService;

	@Autowired
	private UserService userService;
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
	
	@GetMapping(value = "/users")
	public List<User> fetchAllUsers(){
		return userService.getAllUsers();
	}

	@GetMapping(value = "/users/{id}/events")
	public List<Event> fetchMyEvents(@PathVariable(value = "id") Integer userId){
		return eventService.fetchMyCreatedEvents(userId);
	}

	@GetMapping(value = "/users/{id}/others-events")
	public List<Event> fetchMyParticipatingEvents(@PathVariable(value = "id") Integer userId){
		return eventService.fetchOtherCreatedEvents(userId);
	}


//	@DeleteMapping(value = "/users/{id}")
//	public void deleteEvent(@PathVariable(value = "id") Integer id){
//		eventService.deleteEvent(id);
//	}

	@PutMapping(value = "/users/{id}/events/{eventId}")
	public User participate(@PathVariable(value = "id") Integer id, @PathVariable(value = "eventId") Integer eventId){
		return userService.participate(id, eventId);
	}
}
