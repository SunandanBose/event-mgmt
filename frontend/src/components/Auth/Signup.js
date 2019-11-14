import React, { Component } from 'react';
import FormField from '../child/FormField'

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
    }

    render() {
        return (
            <div className={(this.props.loggedInUser !== undefined) ? "hide" : ""}>
				<form onSubmit={this.register} method="POST">
					<FormField elementName="Name" label="Name :" placeholder="Enter Name"
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