package com.chargebee.repository;

import java.util.List;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import com.chargebee.model.Event;


@Repository
public interface EventRepository extends CrudRepository<Event, Integer> {

	List<Event> findEventsByUsername(String username);
}
