import React, {Component} from "react";
import '../css/index.css'

class Home extends Component {
	render() {
		return (
			<div className={"welcome"}>
				<h2>TO DO</h2>
				<p>Admin User can edit/modify the data from frontend</p>
				<p>Delete a Post</p>
			</div>
		);
	}
}

export default Home;