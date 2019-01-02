import React from "react"

class Registration extends React.Component {
	constructor(props) {
		super(props);
		this.state = {value: ''}

		this.register = this.register.bind(this);
	}

	register(event) {
		this.setState({value: 'this.state.value'});
		alert('A name was submitted: ' + event.target.value);
		event.preventDefault();
	}

	render() {
		return (
			<form onSubmit={this.register}>
				<label>Name: <input type="text"/></label>
				<input type="submit" value="Submit" />
			</form>
		)
	}
}

export default Registration;