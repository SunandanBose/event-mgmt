import React from "react"

import {connect} from "react-redux";
import FormField from "./child/FormField";

class Registration extends React.Component {
	constructor(props) {
		super(props);
		this.state = {value: ''}
		this.state = {
			event: {}
		};

		this.register = this.register.bind(this);
		this.handleChange = this.handleChange.bind(this);
	}

	async register(event) {
		event.preventDefault();
		console.log('A name was submitted: ' + JSON.stringify(this.state.event));
		await fetch('http://localhost:8080/events', {
			method: (event.id) ? 'PUT' : 'POST',
			mode: "cors",
			headers: {
				'Accept': 'application/json',
				'Content-Type': 'application/json',
				'Bearer' : this.props.currentUser.token
			},
			body: JSON.stringify({...this.state.event, userId : this.props.currentUser.user.id })	,
		});
	}

	handleChange(e) {
		const target = e.target;
		const value = target.value;
		const name = target.name;
		let event = {...this.state.event};
		event[name] = value;
		this.setState({event});
	}

	render() {
		return (
			<div>
				<form onSubmit={this.register} method="POST">
					<FormField elementName="userId" label="User Name :" placeholder={this.props.currentUser.user.userName} value = {this.props.currentUser.user.userName}   handleChange={this.handleChange} readOnly />
					<FormField elementName="labelName" label="Event Name :" placeholder="Enter event name" handleChange={this.handleChange} />
					<FormField elementName="description" label="Description :" placeholder="Enter Description" handleChange={this.handleChange} />
					<FormField elementName="location" label="Location :" placeholder="Enter Location" handleChange={this.handleChange} />
					<FormField elementName="fees" label="Fees :" placeholder="Enter fees. Leave blank if it is open to all" handleChange={this.handleChange} />
					<FormField elementName="tags" label="Tags :" placeholder="tags.." handleChange={this.handleChange} />
					<FormField elementName="capacity" label="Capacity :" placeholder="Number of people" handleChange={this.handleChange} />
					<button type="submit">Submit</button>
				</form>
			</div>
		)
	}
}
const mapStateToProps = (state) => {
	//debugger;
	return {
		currentUser : state.currentUser
	};
}
export default connect(mapStateToProps)(Registration);