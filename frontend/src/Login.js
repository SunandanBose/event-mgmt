import React from "react";
import FormField from './FormField'

export default class Login extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			user: {}
		};

		this.register = this.register.bind(this);
		this.handleChange = this.handleChange.bind(this);
	}

	async register(event) {
		event.preventDefault();
		alert('A name was submitted: ' + JSON.stringify(this.state.user));
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
					<FormField elementName="password" label="Password :" placeholder="Password" handleChange={this.handleChange} />
					<button type="submit">Login</button>
				</form>
			</div>
		)
	}
}