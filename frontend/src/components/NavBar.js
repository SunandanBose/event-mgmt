import React from "react";
import "../css/navbar.css";
import NavBarElement from "./child/NavBarElement";
import {connect} from "react-redux";

const mapStateToProps = (state) => {
	return {
		loggedInUser: state.currentUser
	}
};


class NavBar extends React.Component{
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
    
    render(){
        if(this.state.userLoggedIn){
            return (
                <div className="navbar-fixed">
                    <ul>
                        <li className="navbar-row"><NavBarElement to="/" text="Home" /></li>
                        <li className="navbar-row"><NavBarElement to="/notifications" text="Create Vlog" /></li>
                        <li className="navbar-row"><NavBarElement to="/events" text="My Vlog" /></li>
                        <li className="navbar-row"><NavBarElement to="/event" text="Event Registration" /></li>
                    </ul>
                </div>
            );
        }
        else{
            return (
                <div className="navbar-fixed">
                    <ul>
                        <li className="navbar-row"><NavBarElement to="/" text="Home" /></li>
                        <li className="navbar-row"><NavBarElement to="/login" text="Create Vlog" /></li>
                        <li className="navbar-row"><NavBarElement to="/login" text="My Vlog" /></li>
                        <li className="navbar-row"><NavBarElement to="/login" text="Event Registration" /></li>
                    </ul>
                </div>
            );
        }
    }
}

export default connect(mapStateToProps, null)(NavBar);