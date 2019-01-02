package com.chargebee.service;

import com.chargebee.model.Event;
import com.chargebee.repository.UserRepository;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.stream.Collectors;

@Service
public class UserService {

    private UserRepository usrrepo;

    public List<Event> getCancelledEvents(String username) {
        com.chargebee.model.User user = usrrepo.findByUsername(username);
        return user.getEvntList().stream().filter(Event::isCancelled).collect(Collectors.toList());
    }
}
