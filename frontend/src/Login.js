import React from "react";

export default class Login extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			users: []
		};
	}

	componentDidMount(){
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
				this.setState({ users: json })
			})
	}

	render() {
		return (
			<div>
				You are logged in as:
				<select>
					<option key="0" label="--Select a user--" value=""/>
					{this.state.users.map(user => {
						return <option key={user.id}>{user.userName}</option>
					})}
				</select>
				 Click on the dropdown to switch user.
			</div>
		)
	}
}