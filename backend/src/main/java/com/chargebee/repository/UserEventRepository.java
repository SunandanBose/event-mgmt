package com.chargebee.repository;

import com.chargebee.model.Event;
import com.chargebee.model.User;
import com.chargebee.model.UserEvent;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;


@Repository
public interface UserEventRepository extends JpaRepository<UserEvent, Integer> {

    List<UserEvent> findByUser(User user);

    List<UserEvent> findByEvent(Event event);
}
