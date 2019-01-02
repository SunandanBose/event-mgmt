package com.chargebee.repository;

import com.chargebee.model.UserEvent;
import com.chargebee.model.Event;
import com.chargebee.model.User;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import java.util.List;


@Repository
public interface UserEventRepository extends CrudRepository<UserEvent, Integer> {

    List<Event> findListOfEvents(User user);

    List<User> findListOfUsers(Event event);
}
