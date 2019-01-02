package com.chargebee.service;

import com.chargebee.model.Event;
import com.chargebee.model.UserEvent;
import com.chargebee.repository.EventRepository;
import com.chargebee.repository.UserEventRepository;
import com.chargebee.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class UserEventService {

    @Autowired
    private UserRepository userRepository;

    @Autowired
    private UserEventRepository usrevntrepository;

    @Autowired
    private EventRepository eventrep;





    public List<Event> getEventsParticpatedByUser(String username) {
        com.chargebee.model.User user = userRepository.findByUsername(username);
        return usrevntrepository.findListOfEvents(user);
    }

    public List<com.chargebee.model.User> getUsersOfParticularEvent(Integer id) {
        Event event = eventrep.findById(id).get();
        return usrevntrepository.findListOfUsers(event);
    }

    public UserEvent userParticipatingInEvent(Integer id, String username) {
        UserEvent usrevnt = new UserEvent();
        Event event = eventrep.findById(id).get();
        com.chargebee.model.User user = userRepository.findByUsername(username);
        usrevnt.setEvent(event);
        usrevnt.setUser(user);
        usrevntrepository.save(usrevnt);
        return usrevnt;


    }
}
