import React, {Component} from "react";
import EventList from "./EventList";

class EventsParticipated extends Component {
	constructor() {
		super();
		this.state = {
			events: []
		}
	}

	componentDidMount() {
		let currentUser = this.props.currentUser || 2;
		fetch('http://localhost:8080/users/' + currentUser + '/events-participated', {
			method: 'GET',
			mode: "cors",
			headers: {
				'Accept': 'application/json',
				'Content-Type': 'application/json'
			},

		}).then(res => res.json())
			.then(json => {
				this.setState({events: json})
			});
	}


	render() {
		return (
			<div>
				<EventList events={this.state.events} showParticipate={false}/>
			</div>
		);
	}
}

export default EventsParticipated;