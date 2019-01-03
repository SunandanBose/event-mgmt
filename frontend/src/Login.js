import React from "react";

export default class Login extends React.Component {
	render() {
		return (
			<div>
				You are logged in as:
				<select onChange={this.props.activeUser}>
					<option key="0" label="--Select a user--" value=""/>
					{this.props.users.map(user => {
						return <option value={user.id} key={user.id} label={user.userName}></option>
					})}
				</select>
				Click on the dropdown to switch user.
			</div>
		)
	}
}