import React, {Component} from "react";
import "../index.css";

export default class Event extends Component {
	
	render() {
		return (
			<tr className="event">
				<td className="title" >{this.props.data.eventName}</td>
				<td className="organizer" >{this.props.data.createdBy.userName}</td>
				<td className="description">{this.props.data.description}</td>
			</tr>
		)
	}
}
