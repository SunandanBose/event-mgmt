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

    public List<Event> getEventsParticpatedByUser(Integer userId) {
        User user = userRepository.findById(userId).get();
        return eventRepository.findByCreatedByNot(user);
    }

    public List<User> getUsersOfParticularEvent(Integer id) {
        Event event = eventRepository.findById(id).get();
        List<UserEvent> events = userEventRepository.findByEvent(event);
        return events.stream().map(UserEvent::getUser).collect(Collectors.toList());
    }

    public UserEvent userParticipatingInEvent(Integer id, String username) {
        UserEvent usrevnt = new UserEvent();
        Event event = eventRepository.findById(id).get();
        User user = userRepository.findByUserName(username);
        usrevnt.setEvent(event);
        usrevnt.setUser(user);
        userEventRepository.save(usrevnt);
        return usrevnt;


    }
}
