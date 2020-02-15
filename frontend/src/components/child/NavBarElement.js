import React from "react";
import { NavLink} from "react-router-dom";

export default class NavBarElement extends React.Component{

    constructor(props){
        super(props);
        this.handleClick = this.handleClick.bind(this);

    }
    handleClick(e){
        document.getElementById('/').className=""
        e.currentTarget.className = "active";
        this.forceUpdate();
    }
    render(){
        return (
            <NavLink to={this.props.to} id={this.props.to} onClick={this.handleClick}>{this.props.text}</NavLink>
        );
    }
}
