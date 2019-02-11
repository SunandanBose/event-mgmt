import React from "react";
import "../css/navbar.css"
import NavBarElement from "./child/NavBarElement";


export default class NavBar extends React.Component{
    render(){
        return (
            <div className="navbar-fixed">
                <ul>
                    <li className="navbar-row"><NavBarElement to="/" text="Home" /></li>
					<li className="navbar-row"><NavBarElement to="/notifications" text="Events Participated" /></li>
					<li className="navbar-row"><NavBarElement to="/events" text="Upcoming Events" /></li>
					<li className="navbar-row"><NavBarElement to="/event" text="Registration" /></li>
                </ul>
            </div>
        );
    }
}