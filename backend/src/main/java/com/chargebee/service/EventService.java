package com.chargebee.service;

import java.util.ArrayList;
import java.util.List;

import com.chargebee.model.User;
import com.chargebee.repository.UserEventRepository;
import com.chargebee.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.chargebee.model.Event;
import com.chargebee.repository.EventRepository;

@Service
public class EventService {

	@Autowired
	private EventRepository eventrep;

	@Autowired
	private UserEventService usrEvntService;

	@Autowired
	private UserRepository usrrepo;
	
	public Event create(Event newevent) {
		//get current user
		//newevent.setUsername("abcdef");
		if(newevent.getUsername() != null) {
			User user = new User();
			user.setUsername(newevent.getUsername());
			usrrepo.save(user);
		}
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
		Event event = eventrep.findById(id).get();
		event.setCancelled(true);
		eventrep.save(event);
		//eventrep.deleteById(id);
		
	}

	public Event updateEvent(Integer id, Event evnt) {
		Event updatedEvent = eventrep.findById(id).get();
		updatedEvent.merge(evnt);
		eventrep.save(updatedEvent);
		return updatedEvent;
	}
	
	

}
