import React from "react";
import { NavLink} from "react-router-dom";

export default class NavBarElement extends React.Component{
    render(){
        return (
            <NavLink to={this.props.to}>{this.props.text}</NavLink>
        );
    }
}
