package com.event.model;

import com.event.dto.EventDto;

import javax.persistence.*;

@Entity
public class Event {

	public Event() {
	}

	@Id
    @GeneratedValue(strategy = GenerationType.AUTO)
	private Integer id;

	@OneToOne
	private User createdBy;
	
	private String eventName;

	private boolean isCancelled;
	
	private String description;
	
	private Integer duration;
	
	private String location;
	
	private double fees;
	
	private String tags;
	
	private Integer capacity;

	public Event(EventDto eventDto, User user) {
		this.createdBy = user;
		this.eventName = eventDto.getEventName();
		this.description = eventDto.getDescription();
		this.duration = eventDto.getDuration();
		this.location = eventDto.getLocation();
		this.fees = eventDto.getFees();
		this.tags = eventDto.getTags();
		this.capacity = eventDto.getCapacity();
	}

	public User getCreatedBy() {
		return createdBy;
	}

	public void setCreatedBy(User createdBy) {
		this.createdBy = createdBy;
	}

	public Integer getId() {
		return id;
	}

	public void setId(Integer id) {
		this.id = id;
	}

	public String getEventName() {
		return eventName;
	}

	public void setEventName(String eventName) {
		this.eventName = eventName;
	}

	public String getDescription() {
		return description;
	}

	public void setDescription(String description) {
		this.description = description;
	}

	public Integer getDuration() {
		return duration;
	}

	public void setDuration(Integer duration) {
		this.duration = duration;
	}

	public String getLocation() {
		return location;
	}

	public void setLocation(String location) {
		this.location = location;
	}

	public double getFees() {
		return fees;
	}

	public void setFees(double fees) {
		this.fees = fees;
	}

	public String getTags() {
		return tags;
	}

	public void setTags(String tags) {
		this.tags = tags;
	}

	public Integer getCapacity() {
		return capacity;
	}

	public void setCapacity(Integer capacity) {
		this.capacity = capacity;
	}

	public void merge(Event event) {
		this.eventName = event.eventName;
		this.description = event.description;
		this.duration = event.duration;
		this.location = event.location;
		this.fees = event.fees;
		this.tags = event.tags;
		this.capacity = event.capacity;
		
	}

	public boolean isCancelled() {
		return isCancelled;
	}

	public void setCancelled(boolean cancelled) {
		isCancelled = cancelled;
	}
}
