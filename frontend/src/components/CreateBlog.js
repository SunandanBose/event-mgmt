import React, {Component} from "react";
import TextField from "./child/TextField";
import {connect} from "react-redux";
import { EditorState} from 'draft-js';
import ImageUploader from 'react-images-upload';
import { Editor } from 'react-draft-wysiwyg';
import {stateToHTML} from 'draft-js-export-html';
import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css';
import {hostname} from "../constants/properties";
import "../css/blog.css";
import Tag from "./child/Tag";
				
const mapStateToProps = (state) => {
	return {token : state.currentUser.token}
}

class CreateBlog extends Component {

	constructor(){
		super();
		this.state={
			event : {},
			pictures : [],
			editorState: EditorState.createEmpty(),
		}
		this.handleChange = this.handleChange.bind(this);
		this.submitCreateBlog = this.submitCreateBlog.bind(this);
		this.onDrop = this.onDrop.bind(this);
		this.selectedtags = this.selectedtags.bind(this);
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
		const formData = new FormData();
		formData.append('file',this.state.pictures[0]);
		formData.append('event', JSON.stringify(this.state.event));
		fetch('http://'+hostname+':8080/blogs', {
			method: 'POST',
			mode: "cors",
			headers: {
				'Bearer' : this.props.token
			},
			body: formData,
		})
		.then((res) => {
			console.log("Successfully Created!!!" + JSON.stringify(res))
			this.props.history.push('/events');
		})
		.catch(() => console.log("Sorry Better Luck Next Time!!!"));
		
	}

	onDrop(picture) {
			console.log(picture);
			this.setState({
				pictures: this.state.pictures.concat(picture),
			});
	 }

	 onEditorStateChange = (editorState) => {
		this.setState({
		  editorState,
		  event: {...this.state.event, body: stateToHTML(editorState.getCurrentContent()) }
		});
	};	

	selectedtags(tags){
		console.log(tags);

	}
	render() {
		return (
			<div className="blog create container">
				<TextField row="2" column="177" id="title" 
					handleChange={this.handleChange} label="Title"/>
				<h2>Body</h2>
				<Editor
					editorState={this.state.editorState}
					onEditorStateChange={this.onEditorStateChange}
					wrapperClassName="demo-wrapper"
        			editorClassName="demo-editor"
				/>
				<Tag tags={[]} selectedtags={this.selectedtags}/>
				<ImageUploader
                	withIcon={true}
                	buttonText='Choose images'
                	onChange={this.onDrop}
                	imgExtension={['.jpg', '.gif', '.png', '.gif']}
					maxFileSize={5242880}
					withPreview={true}
            	/>
				<button name="Submit" className="blog button" onClick={this.submitCreateBlog}>Submit</button>
			</div>
		);
	}
}

export default connect(mapStateToProps,null)(CreateBlog);

