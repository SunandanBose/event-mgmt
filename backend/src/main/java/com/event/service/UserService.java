package com.chargebee.service;

import com.chargebee.model.Event;
import com.chargebee.model.User;
import com.chargebee.repository.EventRepository;
import com.chargebee.repository.UserRepository;
import com.chargebee.security.SecurityConfig;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
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
    SecurityConfig securityConfig;

    public User create(User user) {
        user.setPassword(securityConfig.passwordEncoder().encode(user.getPassword()));
        return userRepository.save(user);
    }

    public Optional<User> getUser(Integer userId) {
        return userRepository.findById(userId);
    }

    public List<User> getAllUsers() {
        return new ArrayList<>(userRepository.findAll());
    }
}
