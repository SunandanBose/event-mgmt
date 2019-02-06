import React, {Component} from "react";
import "../../css/index.css";

export default class Event extends Component {

	constructor(){
		super();
		this.participate = this.participate.bind(this);
	}
	participate() {
		//	/users/{id}/event{eventId}
		let currentUser = this.props.currentUser || 2;
		fetch('http://localhost:8080/users/' + currentUser + '/events/' + this.props.data.id, {
			method: 'POST',
			mode: "cors",
			headers: {
				'Accept': 'application/json',
				'Content-Type': 'application/json'
			},

		})
			
	}

	render() {
		if(this.props.showParticipate){
			return (
				<tr className="event">
					<td className="title" >{this.props.data.eventName}</td>
					<td className="organizer" >{this.props.data.createdBy.userName}</td>
					<td className="description">{this.props.data.description}</td>
					<td><button onClick={this.participate} className="button small">Participate</button></td>
				</tr>
			)
		}
		else {
			return (
				<tr className="event">
					<td className="title">{this.props.data.eventName}</td>
					<td className="organizer">{this.props.data.createdBy.userName}</td>
					<td className="description">{this.props.data.description}</td>
				</tr>

			)
		}
	}
}
