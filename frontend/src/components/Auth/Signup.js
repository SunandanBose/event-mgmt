import React, { Component } from 'react';
import FormField from '../child/FormField'
import {hostname} from "../../constants/properties"

export default class SignUp extends Component {

    constructor(props) {
        super(props);
        this.state = {
            user: {}
        }
        this.handleChange = this.handleChange.bind(this);
        this.register = this.register.bind(this);
    }
	handleChange(e) {
		const target = e.target;
		const value = target.value;
		const name = target.name;
		let user = {...this.state.user};
		user[name] = value;
		this.setState({user});
    }
    
    register(event){
        event.preventDefault();
		console.log(this.state.user);
		fetch('http://'+hostname+':8080/users/', {
			method: 'POST',
			mode: "cors",
			headers: {
				'Accept': 'application/json',
				'Content-Type': 'application/json'
            },
            body: JSON.stringify(this.state.user),
		}).then(res => res.json())
		.then(
			(json) => {
				alert("Sucessfully Registered!!!");
				this.props.history.push('/');
			});
        console.log('User created successfully');
    }

    render() {
        return (
            <div className={(this.props.loggedInUser !== undefined) ? "hide" : ""}>
				<form onSubmit={this.register} method="POST">
					<FormField elementName="userName" label="Name :" placeholder="Enter Name"
							   handleChange={this.handleChange}/>
					<FormField elementName="email" label="email :" placeholder="Enter email"
							   handleChange={this.handleChange}/>
					<FormField elementName="password" label="Password :" placeholder="Password"
							   handleChange={this.handleChange} type={"password"}/>
					<button type="submit">Register</button>
				</form>
			</div>
        );
    }
}