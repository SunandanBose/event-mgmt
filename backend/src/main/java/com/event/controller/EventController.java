package com.chargebee.controller;

import com.chargebee.dto.EventDto;
import com.chargebee.model.Blog;
import com.chargebee.model.Event;
import com.chargebee.model.User;
import com.chargebee.service.EventService;
import com.chargebee.service.UserEventService;
import com.chargebee.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
public class EventController {

    @Autowired
    private EventService eventService;

    @Autowired
    private UserEventService userEventService;

    @PostMapping(value = "/events")
    public Event createEvent(@RequestBody EventDto event) {
        return eventService.create(event);
    }

    @GetMapping(value = "/events")
    public List<Event> getAllEvents() {
        return eventService.getAll();
    }


    @DeleteMapping(value = "/events/{id}")
    public void deleteEvent(@PathVariable(value = "id") Integer id) {
        eventService.deleteEvent(id);
    }

    @PutMapping(value = "/events/{id}")
    public Event updateEvent(@PathVariable(value = "id") Integer id, @RequestBody Event evnt) {
        System.out.println(id);
        return eventService.updateEvent(id, evnt);
    }

    @GetMapping(value = "/events/{id}/users")
    public List<User> getListOfUsers(@PathVariable(value = "id") Integer id) {
        return userEventService.getUsersOfParticularEvent(id);
    }
}
