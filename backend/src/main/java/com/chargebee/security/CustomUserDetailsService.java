package com.chargebee.security;

import com.chargebee.model.User;
import com.chargebee.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

import java.util.Collections;
import java.util.Optional;

@Service
public class CustomUserDetailsService implements UserDetailsService {
    private UserRepository userRepository;

    @Autowired
    public CustomUserDetailsService(UserRepository userRepository) {
        this.userRepository = userRepository;
    }

    @Override
    public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
        User user = userRepository.findByUserName(username).orElseThrow(() -> new UsernameNotFoundException("Not found"));
        return new SpringSecurityUser(user.getId(), user, user.getUserName(), user.getPassword(),
                Collections.singletonList(new SimpleGrantedAuthority(user.getRole())));
    }

    Optional<UserDetails> loadUserByUserId(Integer userId) {
        Optional<User> optionalUser = userRepository.findById(userId);
        return optionalUser.flatMap(user -> Optional.of(new SpringSecurityUser(user.getId(), user, user.getUserName(), user.getPassword(),
                Collections.singletonList(new SimpleGrantedAuthority(user.getRole())))));
    }

}