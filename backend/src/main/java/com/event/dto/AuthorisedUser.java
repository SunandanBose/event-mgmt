package com.event.dto;

import com.event.model.User;

public class AuthorisedUser {
    private String token;
    private String tokenType;
    private User user;

    public AuthorisedUser() {
    }

    public AuthorisedUser(String tokenType, String token, User user) {
        this.token = token;
        this.tokenType = tokenType;
        this.user = user;
    }

    public String getToken() {
        return token;
    }

    public void setToken(String token) {
        this.token = token;
    }

    public String getTokenType() {
        return tokenType;
    }

    public void setTokenType(String tokenType) {
        this.tokenType = tokenType;
    }

    public User getUser() {
        return user;
    }

    public void setUser(User user) {
        this.user = user;
    }
}