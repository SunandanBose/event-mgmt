package com.chargebee.repository;

import org.springframework.data.repository.CrudRepository;

import com.chargebee.model.User;

public interface UserRepository extends CrudRepository<User, Integer> {

	User findByUsername(String username);
}
