package com.chargebee.controller;

import com.chargebee.dto.AuthorisedUser;
import com.chargebee.dto.Credentials;
import com.chargebee.security.JwtTokenProvider;
import com.chargebee.security.SpringSecurityUser;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class AuthController {
    @Autowired
    JwtTokenProvider jwtTokenProvider;
    @Autowired
    AuthenticationManager authenticationManager;

    @PostMapping(value = "auth/login")
    public ResponseEntity login(@RequestBody Credentials credentials){
        UsernamePasswordAuthenticationToken authentication = new UsernamePasswordAuthenticationToken(credentials.getUserName(), credentials.getPassword());
        Authentication authenticationResult = authenticationManager.authenticate(authentication);
        SecurityContextHolder.getContext().setAuthentication(authenticationResult);
        SpringSecurityUser principal = (SpringSecurityUser) SecurityContextHolder.getContext().getAuthentication().getPrincipal();
        String token = jwtTokenProvider.generateToken(authenticationResult);
        return ResponseEntity.ok(new AuthorisedUser("Bearer", token, principal.getUser()));
    }

    @PostMapping(value = "auth/signup")
    public ResponseEntity signup(@RequestBody SignUpDto signUpDto){
        UsernamePasswordAuthenticationToken authentication = new UsernamePasswordAuthenticationToken(credentials.getUserName(), credentials.getPassword());
        Authentication authenticationResult = authenticationManager.authenticate(authentication);
        SecurityContextHolder.getContext().setAuthentication(authenticationResult);
        SpringSecurityUser principal = (SpringSecurityUser) SecurityContextHolder.getContext().getAuthentication().getPrincipal();
        String token = jwtTokenProvider.generateToken(authenticationResult);
        return ResponseEntity.ok(new AuthorisedUser("Bearer", token, principal.getUser()));
    }
}