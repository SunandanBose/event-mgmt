import React from "react"
import "../css/header.css"
import HeaderLink from "./child/HeaderLink";
import {connect} from "react-redux";
import DropDown from "./child/DropDown";
import NavBarElement from "./child/NavBarElement";

const mapStateToProps = (state) => {
	return {
		loggedInUser: state.currentUser
	}
};


class Header extends React.Component {
	constructor() {
		super();
		this.state = {
			userLoggedIn: false
		}
	}

	componentDidUpdate(previousProps) {
		if (this.props.loggedInUser !== previousProps.loggedInUser) {
			this.props.loggedInUser ? this.setState({userLoggedIn: true}) : this.setState({userLoggedIn: false});
		}
	}



	render() {
		return (
			<div className="header-fixed">
				<div className="heading">
					<h1 className="inline">Vlog site</h1>
					{
						this.props.loggedInUser && 
						<div className="authorization heading">
							Hi {this.props.loggedInUser.user.userName}
							<DropDown DropDownClass="dropDownContent" />
						</div>
					}

					<ul className={this.state.userLoggedIn ? "hide authorization" : "authorization"}>
						<li><NavBarElement to="/login" text="Login"/></li>
						<li><NavBarElement to="/signup" text="Sign up"/></li>
					</ul>
				</div>
			</div>)
	}
}

export default connect(mapStateToProps, null)(Header);