import React, {Component} from "react";
import "../index.css";

export default class Event extends Component {

	constructor(){
		super();
		this.participate = this.participate.bind(this);
	}
	participate() {
		//	/users/{id}/event{eventId}
		fetch('http://localhost:8080/users/'+ this.props.currentUser || 2 +'/events/'+this.props.data.id, {
			method: 'PUT',
			mode: "cors",
			headers: {
				'Accept': 'application/json',
				'Content-Type': 'application/json'
			},

		})
			
	}

	render() {
		return (
			<tr className="event">
				<td className="title" >{this.props.data.eventName}</td>
				<td className="organizer" >{this.props.data.createdBy.userName}</td>
				<td className="description">{this.props.data.description}</td>
				<td><button onClick={this.participate} className="button small">Participate</button></td>
			</tr>
		)
	}
}
