import React, {Component} from "react";
import TextField from "./child/TextField";
import {connect} from "react-redux";
import PropTypes from 'prop-types';
import {events_participated} from "../actions";
import ImageUploader from 'react-images-upload';

const mapStateToProps = (state) => {
	return {token : state.currentUser.token}
}

class CreateBlog extends Component {

	constructor(){
		super();
		this.state={
			event : {},
			pictures : []
		}
		this.handleChange = this.handleChange.bind(this);
		this.submitCreateBlog = this.submitCreateBlog.bind(this);
		this.onDrop = this.onDrop.bind(this);
		this.uploadImageToServer = this.uploadImageToServer.bind(this);
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
				'Accept': 'form',
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

	uploadImageToServer(event){
		event.preventDefault();
		const formData = new FormData();
		formData.append('file',this.state.pictures[0]);
		console.log('event object ' + JSON.stringify(this.state.event));
		fetch('http://localhost:8080/upload', {
			method: 'POST',
			mode: "cors",
			headers: {
				'Bearer' : this.props.token
			},

			body: formData,
		})
		.then((res) => {
			console.log(res);
			alert("Successfully Created!!!");
		})
		.catch(() => alert("Sorry Better Luck Next Time!!!"));
	}
	onDrop(picture) {
			console.log(picture);
			this.setState({
				pictures: this.state.pictures.concat(picture),
			});
	 }

	render() {
		return (
			<div>
				<TextField row="2" column="60" id="title" handleChange={this.handleChange} label="Title"/>
				<TextField row="10" column="60" id ="body" handleChange={this.handleChange} label="Body"/>
				<ImageUploader
                	withIcon={true}
                	buttonText='Choose images'
                	onChange={this.onDrop}
                	imgExtension={['.jpg', '.gif', '.png', '.gif']}
					maxFileSize={5242880}
					withPreview={true}
            	/>
				<button name="Submit" onClick={this.submitCreateBlog}>Submit</button>
				<button name="Upload" onClick={this.uploadImageToServer}>Upload</button>
			</div>
		);
	}
}

export default connect(mapStateToProps,null)(CreateBlog);