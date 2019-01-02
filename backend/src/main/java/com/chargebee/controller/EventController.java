package com.chargebee.controller;

import java.util.List;

import com.chargebee.model.User;
import com.chargebee.model.UserEvent;
import com.chargebee.service.UserEventService;
import com.chargebee.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.chargebee.model.Event;
import com.chargebee.service.EventService;

@RestController
public class EventController {
	
	@Autowired
	private EventService eventService;

	@Autowired
	private UserEventService usrevntservice;

	@Autowired
	private UserService usrservice;
	
	@PostMapping(value = "/events")
	public Event createEvent(@ModelAttribute("addEvent") Event newevent){
		return eventService.create(newevent);
	}
	
	@GetMapping(value = "/events/{username}")
	public List<Event> fetchMyEvents(@PathVariable(value = "username") String username){
		System.out.println(username);
		return eventService.fetchMyCreatedEvents(username);
	}
	
	@GetMapping(value = "/getOtherEvents/{username}")
	public List<Event> fetchOtherEvents(@PathVariable(value = "username") String username){
		return eventService.fetchOtherCreatedEvents(username);
	}
	
	@DeleteMapping(value = "/events/{id}")
	public void deleteEvent(@PathVariable(value = "id") Integer id){
		eventService.deleteEvent(id);
	}
	
	@PutMapping(value = "/events/{id}")
	public Event updateEvent(@PathVariable(value = "id") Integer id,@RequestBody Event evnt){
		System.out.println(id);
		return eventService.updateEvent(id,evnt);
	}

	@GetMapping(value = "/events/users/{username}")
	public List<Event> getListofEvents(@PathVariable(value = "username") String username){
		return usrevntservice.getEventsParticpatedByUser(username);
	}

	@GetMapping(value = "/events/users/{id}")
	public List<User> getListofUsers(@PathVariable(value = "id") Integer id){
		return usrevntservice.getUsersOfParticularEvent(id);
	}


	@PostMapping(value = "/events/{id}/users/{username}")
	public UserEvent userParticipatingInEvent(@PathVariable(value = "id") Integer id,
											  @PathVariable(value = "username") String username){
		return usrevntservice.userParticipatingInEvent(id,username);
	}

	@GetMapping(value ="/users/{username}/notification")
	public List<Event> notification(@PathVariable(value = "username") String username){
		return usrservice.getCancelledEvents(username);
	}


}
