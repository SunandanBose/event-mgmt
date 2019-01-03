import React, {Component} from "react";
import "../index.css";

export default class Event extends Component {
	
	render() {
		return (
			<div className="event">
				<div className="title" >{this.props.data.title}</div>
				<div className="description">{this.props.data.description}</div>
			</div>
		)
	}
}
