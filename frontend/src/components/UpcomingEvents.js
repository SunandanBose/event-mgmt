import React, {Component} from "react";
import EventList from "./child/EventList";
import {upcoming_events} from "../actions";
import {connect} from "react-redux";

const mapStateToProps = (state) => {
	return {
		currentUser: state.currentUser,
		upcoming_events: state.upcoming_events
	}
};

const mapDispatchToProps = (dispatch) => {
	return {
		upcoming_events_action: events => dispatch(upcoming_events(events))
	}
};

class UpcomingEvents extends Component {
	constructor() {
		super();
		this.state = {
			events: []
		}
	}

	componentDidMount() {
		let currentUserId = this.props.currentUser.user.id;
		fetch('http://localhost:8080/users/' + currentUserId + '/others-events', {
			method: 'GET',
			mode: "cors",
			headers: {
				'Accept': 'application/json',
				'Content-Type': 'application/json'
			},

		}).then(res => res.json())
			.then(json => {
				this.props.upcoming_events_action(json);
			})
			.catch(e => alert("You currently don't have any events"));
	}


	render() {
		return (
			<div>
				<EventList events={this.props.upcoming_events} showParticipate={true} currentUser={this.props.currentUser}/>
			</div>
		);
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(UpcomingEvents);