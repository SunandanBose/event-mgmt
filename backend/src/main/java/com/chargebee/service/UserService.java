package com.chargebee.service;

import com.chargebee.model.Event;
import com.chargebee.model.User;
import com.chargebee.repository.EventRepository;
import com.chargebee.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

@Service
public class UserService {

    @Autowired
    private UserRepository userRepository;

    @Autowired
    private EventRepository eventRepository;

    public List<Event> getCancelledEvents(Integer userId) {
        User user = userRepository.findById(userId).get();
        return user.getEventList().stream().filter(Event::isCancelled).collect(Collectors.toList());
    }

    public User create(User user) {
        return userRepository.save(user);
    }

    public Optional<User> getUser(Integer userId) {
        return userRepository.findById(userId);
    }

    public List<User> getAllUsers() {
        return new ArrayList<>(userRepository.findAll());
    }

    public void participate(Integer id, Integer eventId) {
        User user = userRepository.findById(id).get();
        user.getEventList().add(eventRepository.findById(eventId).get());
        userRepository.save(user);
    }
}
