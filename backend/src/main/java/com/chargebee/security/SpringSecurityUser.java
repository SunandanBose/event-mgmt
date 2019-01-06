package com.chargebee.security;

import java.util.Collection;
import java.util.List;

import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;

import com.chargebee.model.User;
import com.fasterxml.jackson.annotation.JsonIgnore;

public class SpringSecurityUser implements UserDetails{

	private Integer id;
	
	private User user;

    private String username;

    @JsonIgnore
    private String password;

    private List<GrantedAuthority> authorities;
 

	public SpringSecurityUser(Integer id, User user, String username, String password,
			List<GrantedAuthority> authorities) {
		this.id = id;
		this.user = user;
		this.username = username;
		this.password = password;
		this.authorities = authorities;
	}

	@Override
	public Collection<? extends GrantedAuthority> getAuthorities() {
		 
		return authorities;
	}

	@Override
	public String getPassword() {
		 
		return password;
	}

	@Override
	public String getUsername() {
		 
		return username;
	}

	public Integer getId() {
		return id;
	}

	public void setId(Integer id) {
		this.id = id;
	}

	@Override
	public boolean isAccountNonExpired() {
		 
		return true;
	}

	@Override
	public boolean isAccountNonLocked() {
		 
		return true;
	}

	@Override
	public boolean isCredentialsNonExpired() {
		 
		return true;
	}

	@Override
	public boolean isEnabled() {
		 
		return true;
	}


	public User getUser() {
		return user;
	}
}
