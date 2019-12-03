package com.event.repository;

import com.event.model.Event;
import com.event.model.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;


@Repository
public interface EventRepository extends JpaRepository<Event, Integer> {

	List<Event> findByCreatedBy(User user);

	List<Event> findByCreatedByNot(User user);
}
