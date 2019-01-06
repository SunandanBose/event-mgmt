import React, {Component} from "react";
import EventList from "./child/EventList";
import {connect} from "react-redux";
import PropTypes from 'prop-types';

const mapStateToProps = (state) => {
	return {events: state.events}
};

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

EventsParticipated.propTypes = {
	events: PropTypes.array
};

export default connect(mapStateToProps)(EventsParticipated)