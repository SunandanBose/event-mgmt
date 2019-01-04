import React, {Component} from "react";
import {HashRouter, NavLink, Route, Switch} from "react-router-dom";

import Home from "./Home";
import EventsParticipated from "./EventsParticipated";
import UpcomingEvents from "./UpcomingEvents";
import Registration from "./Registration";
import './index.css'

class Main extends Component {
	constructor() {
		super();
		this.state = {
			users: [],
			currentUser: ""
		};
		this.setActiveUser = this.setActiveUser.bind(this);
	}

	componentDidMount() {
		fetch('http://localhost:8080/users', {
			method: 'GET',
			mode: "cors",
			headers: {
				'Accept': 'application/json',
				'Content-Type': 'application/json'
			},

		}).then(res => res.json())
			.then(json => {
				console.log(json);
				this.setState({users: json})
			})
	}


	setActiveUser(e) {
		const target = e.target;
		this.setState({currentUser: target.value});
	}

	render() {
		return (
			<HashRouter>
				<div>
					<h1 className="header">Event Management</h1>
					<div>
						<div className="menu">
							<ul style={{'float': 'center'}}>
								<li><NavLink exact to="/">Home</NavLink></li>
								<li><NavLink to="/notifications">Events Participated</NavLink></li>
								<li><NavLink to="/events">Upcoming Events</NavLink></li>
								<li><NavLink to="/event">Registration</NavLink></li>
							</ul>
						</div>
						<div className="content">
							<Switch>
								<Route exact path="/" render={(props) => <Home users={this.state.users} activeUser={this.setActiveUser} {...props} />} />
								<Route path="/notifications" render={(props) => <EventsParticipated users={this.state} {...props} />}/>
								<Route path="/events" render={(props) => <UpcomingEvents users={this.state} {...props} />}/>
								<Route path="/event" component={Registration}/>
							</Switch>
						</div>
					</div>
				</div>
			</HashRouter>
		);
	}
}

export default Main;