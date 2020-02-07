import React, {Component} from "react";
import {HashRouter, Route, Switch} from "react-router-dom";
import {connect} from "react-redux";
import Home from "./Home";
import Blogs from "./Blogs";
import Registration from "./Registration";
import '../css/index.css'
import Header from "./Header"
import NavBar from "./NavBar";
import CreateBlog from "./CreateBlog";
import Blog from "./Blog";
import Login from "./Login";
import SignUp from "./Auth/Signup";
import {currentUser} from "../actions";

const mapDispatchToProps = dispatch => {
	return {
		currentUser: user => dispatch(currentUser(user))
	};
};
const mapStateToProps = (state) => {
	return {
		loggedInUser: state.currentUser
	}
};

class Main extends Component {
	constructor() {
		super();
		this.state = {
			users: {},
			currentUser: ""
		};
		this.setActiveUser = this.setActiveUser.bind(this);
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
								<Route path="/signup" component={SignUp}/>
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

export default connect(mapStateToProps, mapDispatchToProps)(Main)

