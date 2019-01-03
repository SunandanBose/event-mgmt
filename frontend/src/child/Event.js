import React, {Component} from "react";
import "../index.css";

export default class Event extends Component {
	
	render() {
		return (
			<div className="event">
				<div className="title" >{this.props.data.eventName}</div>
				<div className="organizer" >{this.props.data.createdBy.userName}</div>
				<div className="description">{this.props.data.description}</div>
			</div>
		)
	}
}
