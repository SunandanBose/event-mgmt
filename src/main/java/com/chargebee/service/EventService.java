package com.chargebee.service;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.chargebee.model.Event;
import com.chargebee.repository.EventRepository;

@Service
public class EventService {

	@Autowired
	private EventRepository eventrep;
	
	public Event create(Event newevent) {
		//get current user
		//newevent.setUsername("abcdef");
		eventrep.save(newevent);
		return newevent;
	}

	public List<Event> fetchMyCreatedEvents(String username) {
		
		 return eventrep.findEventsByUsername(username);
	}

	public List<Event> fetchOtherCreatedEvents(String username) {
		List<Event> eventsList = (List<Event>) eventrep.findAll();
		List<Event> eventCreatedByOthers = new ArrayList();
		for(Event e : eventsList) {
			if(!e.getUsername().equals(username)) {
				eventCreatedByOthers.add(e);
			}
		}
		return eventCreatedByOthers;
	}

	public void deleteEvent(Integer id) {
		eventrep.deleteById(id);
		
	}

	public Event updateEvent(Integer id, Event evnt) {
		Event updatedEvent = eventrep.findById(id).get();
		updatedEvent.merge(evnt);
		return updatedEvent;
	}
	
	

}
