package com.event.repository;

import com.event.model.Event;
import com.event.model.User;
import com.event.model.UserEvent;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;


@Repository
public interface UserEventRepository extends JpaRepository<UserEvent, Integer> {

    List<UserEvent> findByUser(User user);

    List<UserEvent> findByEvent(Event event);
}
