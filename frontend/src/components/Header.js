import React from "react"
import "../css/header.css"
import {connect} from "react-redux";
import UserInfoDropDown from "./child/UserInfoDropDown";
import NavBarElement from "./child/NavBarElement";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCocktail } from '@fortawesome/free-solid-svg-icons';
import NavBar from "./NavBar";

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
					<div className="logo">
						<h1 className="inline"><FontAwesomeIcon icon={ faCocktail }/> Unidiot 1.0</h1>
					</div>
					<NavBar />
					{
						this.props.loggedInUser && 
						<div className="authorization">
							Hi {this.props.loggedInUser.user.userName}
							<UserInfoDropDown DropDownClass="dropDownContent" />
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