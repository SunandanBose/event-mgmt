import React, {Component} from "react";
import {HashRouter, Route, Switch} from "react-router-dom";

import Home from "./Home";
import Blogs from "./Blogs";
import Registration from "./Registration";
import '../css/index.css'
import Header from "./Header"
import NavBar from "./NavBar";
import CreateBlog from "./CreateBlog";
import Blog from "./Blog";
import Login from "./Login";

export default class Main extends Component {
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
				'Content-Type': 'application/json',
				'Bearer': 'eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiIyIiwiaWF0IjoxNTQ2NjkyNDE3LCJleHAiOjE1NDcyOTcyMTd9.N4CXg98Pjehb-wK0OghCM8u7HR52sV2ELV9PEGFZ6KzvrnQzrb56C7VL4hg9tBfuYox2eSabI7mnLyEDEOQg4g'
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
					<Header/>
					<NavBar />
					<div>
						<div className="content">
							<Switch>
								<Route exact path="/" render={(props) => <Home users={this.state.users}
																			   activeUser={this.setActiveUser} {...props} />}/>
								<Route path="/notifications"
									   render={(props) => <CreateBlog users={this.state} {...props} />}/>
								<Route path="/events"
									   render={(props) => <Blogs users={this.state} {...props} />}/>
								<Route path="/event" component={Registration}/>
								<Route path="/blog" component={Blog}/>
								<Route path="/login" render={(props) => <Login users={this.state.users}
																			   activeUser={this.setActiveUser} {...props} />}/>
								
							</Switch>
						</div>
					</div>
				</div>
			</HashRouter>
		);
	}
}