import React, {Component} from "react";
import EventList from "./child/EventList";
import {connect} from "react-redux";
import PropTypes from 'prop-types';
import {events_participated} from "../actions";


const mapStateToProps = (state) => {
	return {
		events: state.events,
		events_participated: state.events_participated,
		currentUser: state.currentUser
	}
};

const mapDispatchToProps = (dispatch) => {
	return {
		events_participated_action: events => dispatch(events_participated(events))
	}
};

class EventsParticipated extends Component {
	componentDidMount() {
		fetch('http://localhost:8080/users/' + this.props.currentUser.user.id + '/events-participated', {
			method: 'GET',
			mode: "cors",
			headers: {
				'Accept': 'application/json',
				'Content-Type': 'application/json',
				'Bearer': this.props.currentUser.token
			},

		}).then(res => res.json())
			.then(json => {
				console.log("Got events participated");
				console.log(json);
				this.props.events_participated_action(json);
			});
	}


	render() {
		return (
			<div>
				<EventList events={this.props.events_participated} showParticipate={false}/>
			</div>
		);
	}
}

EventsParticipated.propTypes = {
	events: PropTypes.array
};

export default connect(mapStateToProps, mapDispatchToProps)(EventsParticipated)