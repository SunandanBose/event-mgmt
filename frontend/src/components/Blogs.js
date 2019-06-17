import React, {Component} from "react";
import EventList from "./child/TextField";
import {upcoming_events} from "../actions";
import {connect} from "react-redux";
import BlogBox from "./child/BlogBox";

const mapStateToProps = (state) => {
	return {
		token: state.currentUser.token,
	}
};



class Blogs extends Component {
	constructor() {
		super();
		this.state = {
			events: []
		}
		this.updateBlogs.bind(this);
	}

	componentDidMount() {
		//let currentUserId = this.props.currentUser.user.id;
		fetch('http://localhost:8080/blogs', {
			method: 'GET',
			mode: "cors",
			headers: {
				'Accept': 'application/json',
				'Content-Type': 'application/json',
				'Bearer' : this.props.token
			},

		}).then(res => res.json())
			
			.then(json => {
				console.log("inside");
				this.updateBlogs(json);
			})
			.catch(e => alert("You currently don't have any events"));
	}

	updateBlogs(json){
		this.setState({ events : json})
		
	}

	render() {
		console.log(this.state.events);
		return (
			<div>
				<h1>List of Blogs</h1>
				{this.state.events.map((event) =>
					<BlogBox title={event.title} body={event.body} />
				)}


			</div>
		);
	}
}

export default connect(mapStateToProps, null)(Blogs);