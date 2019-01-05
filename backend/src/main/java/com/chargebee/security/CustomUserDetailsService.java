package com.chargebee.security;

import java.util.Collections;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

import com.chargebee.model.User;
import com.chargebee.repository.UserRepository;

@Service
public class CustomUserDetailsService implements UserDetailsService {
    @Autowired
    UserRepository userRepository;

    @Override
    public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
        userRepository.findByUserName(username);
        return null;
    }
    
    public UserDetails loadUserByUserId(Integer userId){
        User user = userRepository.findById(userId).get();
        return new SpringSecurityUser(user.getId(), user, user.getUserName(), user.getPassword(), 
        		Collections.singletonList(new SimpleGrantedAuthority(user.getRole())));
    }
    
}