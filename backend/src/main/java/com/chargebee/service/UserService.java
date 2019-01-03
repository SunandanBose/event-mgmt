package com.chargebee.service;

import com.chargebee.model.Event;
import com.chargebee.model.User;
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

    public List<Event> getCancelledEvents(String username) {
        com.chargebee.model.User user = userRepository.findByUserName(username);
        return user.getEventList().stream().filter(Event::isCancelled).collect(Collectors.toList());
    }

    public User create(User user) {
        return userRepository.save(user);
    }

    public Optional<User> getUser(Integer userId) {
        return userRepository.findById(userId);
    }

    public List<User> getAllUsers() {
        return new ArrayList<User>(userRepository.findAll());
    }
}
