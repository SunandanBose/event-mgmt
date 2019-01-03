import React, {Component} from "react";
import {HashRouter, NavLink, Route, Switch} from "react-router-dom";

import Home from "./Home";
import Notification from "./Notification";
import UpcomingEvents from "./UpcomingEvents";
import Registration from "./Registration";

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
				<div style={{'padding': '2%'}}>
					<h1 style={{'paddingLeft': '5%'}}>Simple SPA</h1>
					<div>
						<div style={{'width': '20%', 'float': 'left'}}>
							<ul className="header" style={{'float': 'center'}}>
								<li><NavLink exact to="/">Home</NavLink></li>
								<li><NavLink to="/notifications">Notification</NavLink></li>
								<li><NavLink to="/events">Upcoming Events</NavLink></li>
								<li><NavLink to="/event">Registration</NavLink></li>
							</ul>
						</div>
						<div className="menu">
							<Switch>
								<Route exact path="/" render={(props) => <Home users={this.state.users} activeUser={this.setActiveUser} {...props} />} />
								<Route path="/notifications" render={(props) => <Notification users={this.state} {...props} />}/>
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