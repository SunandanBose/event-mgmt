import React from "react";
import FormField from './child/FormField'

import {currentUser} from "../actions";
import {connect} from "react-redux";

const mapDispatchToProps = dispatch => {
	return {
		currentUser: user => dispatch(currentUser(user))
	};
};

class Login extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			user: {}
		};

		this.register = this.register.bind(this);
		this.handleChange = this.handleChange.bind(this);
	}

	async register(event) {
		console.log(this.state);
		fetch('http://localhost:8080/auth/login', {
			method: 'POST',
			mode: "cors",
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify(this.state.user)
		}).then(res => res.json())
			.then(json => {
				console.log(json);
				this.props.currentUser(json);
				this.setState({users: json})
			});
		event.preventDefault();
	}

	handleChange(e) {
		const target = e.target;
		const value = target.value;
		const name = target.name;
		let user = {...this.state.user};
		user[name] = value;
		this.setState({user});
	}

	render() {
		return (
			<div>
				<form onSubmit={this.register} method="POST">
					<FormField elementName="userName" label="User Name :" placeholder="Enter User Name" handleChange={this.handleChange} />
					<FormField elementName="password" label="Password :" placeholder="Password" handleChange={this.handleChange} type={"password"}/>
					<button type="submit">Login</button>
				</form>
			</div>
		)
	}
}

export default connect(null, mapDispatchToProps)(Login)