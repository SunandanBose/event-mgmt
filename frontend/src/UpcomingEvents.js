import React, { Component } from "react";
import EventList from "./EventList";

class UpcomingEvents extends Component {
	constructor(){
		super();
		this.state = {
			events: []
		}
	}

	componentDidMount(){
		let currentUser = this.props.currentUser || 2;
		fetch('http://localhost:8080/users/'+ currentUser +'/others-events', {
			method: 'GET',
			mode: "cors",
			headers: {
				'Accept': 'application/json',
				'Content-Type': 'application/json'
			},

		}).then(res => res.json())
			.then(json => {
				console.log(json);
				this.setState({ events: json })
			})
			.catch(e => alert("You currently don't have any events"));
	}


	render() {
		return (
			<div>
				<EventList events={this.state.events} showParticipate={true} currentUser={this.props.currentUser} />
			</div>
		);
	}
}

export default UpcomingEvents;