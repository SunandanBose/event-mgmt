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
	private EventService evntserv;
	
	
	@PostMapping(value = "/createEvents1")
	public String createEvent1(){
		return "Hi";
	}
	
	@PostMapping(value = "/Events")
	public Event createEvent(@ModelAttribute("addEvent") Event newevent){
		return evntserv.create(newevent);
	}
	
	@GetMapping(value = "/Events/{username}")
	public List<Event> fetchMyEvents(@PathVariable(value = "username") String username){
		System.out.println(username);
		return evntserv.fetchMyCreatedEvents(username);
	}
	
	@GetMapping(value = "/getOtherEvents/{username}")
	public List<Event> fetchOtherEvents(@PathVariable(value = "username") String username){
		return evntserv.fetchOtherCreatedEvents(username);
	}
	
	@DeleteMapping(value = "/Events/{id}")
	public void deleteEvent(@PathVariable(value = "id") Integer id){
		System.out.println(id);
		evntserv.deleteEvent(id);
	}
	
	@PutMapping(value = "/Events/{id}")
	public Event updateEvent(@PathVariable(value = "id") Integer id,@RequestBody Event evnt){
		System.out.println(id);
		return evntserv.updateEvent(id,evnt);
	}

}
