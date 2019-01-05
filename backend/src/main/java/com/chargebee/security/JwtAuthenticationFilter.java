package com.chargebee.security;

import java.io.IOException;
import java.util.Optional;

import javax.servlet.FilterChain;
import javax.servlet.ServletException;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.stereotype.Component;
import org.springframework.util.StringUtils;
import org.springframework.web.filter.OncePerRequestFilter;

@Component
public class JwtAuthenticationFilter extends OncePerRequestFilter {
	
	@Autowired
	private JwtTokenProvider jwtTokenProvider;
	
	@Autowired
	private CustomUserDetailsService customeUserDetailsService;

	/*private Optional<String> getJWTStringFormRequest(HttpServletRequest httprequest) {
		String bearerToken = httprequest.getHeader("Authorization");
        if (StringUtils.hasText(bearerToken) && bearerToken.startsWith("Bearer ")) {
            return Optional.of(bearerToken.substring(7, bearerToken.length()));
        }
        return null;
    }*/
	private String getJWTStringFormRequest(HttpServletRequest httprequest) {
		String bearerToken = httprequest.getHeader("Authorization");
        if (StringUtils.hasText(bearerToken) && bearerToken.startsWith("Bearer ")) {
            return bearerToken.substring(7, bearerToken.length());
        }
        return null;
    }
	
    @Override
    protected void doFilterInternal(HttpServletRequest request, HttpServletResponse response, FilterChain filterChain) throws ServletException, IOException {

    	//Optional<String> jwtRequest = getJWTStringFormRequest(request);
    	String jwtRequest = getJWTStringFormRequest(request);
    	Integer userid = jwtTokenProvider.getUserIdFromJWT(jwtRequest);
    	customeUserDetailsService.loadUserByUserId(userid);
    	
    }
    
    
}