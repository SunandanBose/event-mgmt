package com.chargebee.repository;

import com.chargebee.model.Event;
import com.chargebee.model.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;


@Repository
public interface EventRepository extends JpaRepository<Event, Integer> {

	List<Event> findByCreatedBy(User user);

	List<Event> findByCreatedByNot(User user);
}
