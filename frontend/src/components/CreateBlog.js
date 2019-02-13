import React, {Component} from "react";
import TextField from "./child/TextField";
import {connect} from "react-redux";
import PropTypes from 'prop-types';
import {events_participated} from "../actions";

const mapStateToProps = (state) => {
	return {token : state.currentUser.token}
}

class CreateBlog extends Component {

	constructor(){
		super();
		this.state={
			event : {}
		}
		this.handleChange = this.handleChange.bind(this);
		this.submitCreateBlog = this.submitCreateBlog.bind(this);
	}
	handleChange(e) {
		const target = e.target;
		const value = target.value;
		const name = target.id;
		let event = {...this.state.event};
		event[name] = value;
		this.setState({event});
	}

	submitCreateBlog(event){
		event.preventDefault();
		console.log('event object ' + JSON.stringify(this.state.event));
		fetch('http://localhost:8080/blogs', {
			method: 'POST',
			mode: "cors",
			headers: {
				'Accept': 'application/json',
				'Content-Type': 'application/json',
				'Bearer' : this.props.token
			},
			body: JSON.stringify(this.state.event),
		})
		.then(() => {
			alert("Successfully Created!!!")
			
		})
		.catch(() => alert("Sorry Better Luck Next Time!!!"));
	}

	render() {
		return (
			<div>
				<TextField row="2" column="60" id="title" handleChange={this.handleChange} label="Title"/>
				<TextField row="10" column="60" id ="body" handleChange={this.handleChange} label="Body"/>
				<button name="Submit" onClick={this.submitCreateBlog}>Submit</button>
			</div>
		);
	}
}

export default connect(mapStateToProps,null)(CreateBlog);