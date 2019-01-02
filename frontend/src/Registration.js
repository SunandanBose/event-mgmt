import React from "react"

import FormField from "./FormField";

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

	register(event) {
		alert('A name was submitted: ' + JSON.stringify(this.state));
		event.preventDefault();
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
				<form onSubmit={this.register}>
					<FormField elementName="userName" label="User Name :" placeholder="Enter User Name" handleChange={this.handleChange} />
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

export default Registration;