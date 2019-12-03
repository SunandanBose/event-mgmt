package com.chargebee.service;

import com.chargebee.model.Event;
import com.chargebee.model.User;
import com.chargebee.model.UserEvent;
import com.chargebee.repository.EventRepository;
import com.chargebee.repository.UserEventRepository;
import com.chargebee.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.stream.Collectors;

@Service
public class UserEventService {

    @Autowired
    private UserRepository userRepository;

    @Autowired
    private UserEventRepository userEventRepository;

    @Autowired
    private EventRepository eventRepository;

    public List<Event> getEventsParticipatedByUser(Integer userId) {
        User user = userRepository.findById(userId).get();
        return userEventRepository.findByUser(user).stream()
                .map(UserEvent::getEvent).collect(Collectors.toList());
    }

    public List<User> getUsersOfParticularEvent(Integer eventId) {
        Event event = eventRepository.findById(eventId).get();
        List<UserEvent> events = userEventRepository.findByEvent(event);
        return events.stream().map(UserEvent::getUser).collect(Collectors.toList());
    }

    public UserEvent participate(Integer userId, Integer eventId) {
        UserEvent userEvent = new UserEvent();
        User user = userRepository.findById(userId).get();
        userEvent.setEvent(eventRepository.findById(eventId).get());
        userEvent.setUser(user);
        userEventRepository.save(userEvent);
        return userEvent;
    }
}
