package com.event.service;

import com.event.dto.EventDto;
import com.event.model.Event;
import com.event.model.User;
import com.event.repository.BlogRepository;
import com.event.repository.EventRepository;
import com.event.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class EventService {

    private final EventRepository eventRepository;

    private final UserRepository userRepository;

    private final BlogRepository blogRepository;

    @Autowired
    public EventService(EventRepository eventRepository, UserRepository userRepository, BlogRepository blogRepository) {
        this.eventRepository = eventRepository;
        this.userRepository = userRepository;
        this.blogRepository = blogRepository;
    }

    public Event create(EventDto eventDto) {
        User user = userRepository.findById(eventDto.getUserId()).get();
        return eventRepository.save(new Event(eventDto, user));
    }

    public List<Event> fetchMyCreatedEvents(Integer userId) {
        return eventRepository.findByCreatedBy(userRepository.findById(userId).get());
    }

    public List<Event> fetchOthersCreatedEvents(Integer userId) {
        User user = userRepository.findById(userId).get();
        return eventRepository.findByCreatedByNot(user);
    }

    public void deleteEvent(Integer id) {
        Event event = eventRepository.findById(id).get();
        // Setting this to cancelled. Not deleting entity
        event.setCancelled(true);
        eventRepository.save(event);
    }

    public Event updateEvent(Integer id, Event evnt) {
        Event updatedEvent = eventRepository.findById(id).get();
        updatedEvent.merge(evnt);
        eventRepository.save(updatedEvent);
        return updatedEvent;
    }



    public List<Event> getAll() {
        return eventRepository.findAll();
    }
}
