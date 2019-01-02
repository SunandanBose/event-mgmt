package com.chargebee.controller;

import java.util.List;

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
		System.out.println(id);
		eventService.deleteEvent(id);
	}
	
	@PutMapping(value = "/events/{id}")
	public Event updateEvent(@PathVariable(value = "id") Integer id,@RequestBody Event evnt){
		System.out.println(id);
		return eventService.updateEvent(id,evnt);
	}

}
