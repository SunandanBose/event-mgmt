import React, {Component} from "react";
import '../css/index.css'

class Home extends Component {
	render() {
		return (
			<div className={"welcome"}>
				<h2>TO DO</h2>
				<ul>
					<li> Delete a Post -- done</li>
					<li> Edit A Blog</li>
					<li> Tagging -- How does Tagging Work?</li>
					<li> Search Bar - Simple(Author,TAG,Title)</li>
					<li> Alert Box Generic Component</li>
					<li> Show All Blog</li>
				</ul>

			</div>
		);
	}
}

export default Home;