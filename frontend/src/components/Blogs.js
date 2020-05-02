import React, {Component} from "react";
import {connect} from "react-redux";
import BlogBox from "./child/BlogBox";
import {hostname} from "../constants/properties"

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
		this.deleteBlog = this.deleteBlog.bind(this);
	}

	componentDidMount() {
		fetch('http://'+hostname+':8080/blogs', {
			method: 'GET',
			mode: "cors",
			headers: {
				'Accept': 'application/json',
				'Content-Type': 'application/json',
				'Bearer' : this.props.token
			},

		}).then(res => res.json())
			
			.then(json => {
				this.updateBlogs(json);
			})
			.catch(e => alert("You currently don't have any events"));
	}

	updateBlogs(json){
		this.setState({ events : json})
	}

	deleteBlog(id){
		const events = this.state.events.filter(x => x.id !== id);
		this.setState({events});
	}

	render() {
		return (
			<div>
				<h1>List of Blogs</h1>
				<div className={"blogs container"}>
				{this.state.events.map((event) =>
					<BlogBox id={event.id} title={event.title} body={event.body} 
							 tags={event.tags.map(tag => tag.name)}	deleteBlog={this.deleteBlog} {...this.props}/>
				)}
				</div>


			</div>
		);
	}
}

export default connect(mapStateToProps, null)(Blogs);