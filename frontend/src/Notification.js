import React, { Component } from "react";
import EventList from "./EventList";
 
class Notification extends Component {
	constructor(){
		super();
		this.state = {
			events : []
		}
	}

	componentDidMount(){
		let currentUser = this.props.currentUser || 2;
		fetch('http://localhost:8080/users/'+ currentUser +'/notification', {
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
			.catch(e => alert("You currently don't have any notification" + e));
	}


	render() {
		return (
			<div>
				<EventList events={this.state.events} />
			</div>
		);
	}
}

export default Notification;