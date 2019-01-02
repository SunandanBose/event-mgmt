import React from "react"

class Registration extends React.Component {
	register() {
		this.setState(value: this.state.value);
		alert('A name was submitted: ' + this.state.value);
		event.preventDefault();
	}

	render() {
		return (
			<form onSubmit={this.register}>
				<label>Name: <input type="text" value={this.state.value}></label>
				<input type="submit" value="Submit" />
			</form>
		)
	}
}