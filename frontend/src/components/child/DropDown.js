import React from "react";

export default class DropDown extends React.Component{
    logOut(){
        localStorage.clear();
        window.location.reload();
    }

    render(){
        return(
            <div className={this.props.DropDownClass}>
                <a href="#">User Info</a>
                <a href="#" onClick={this.logOut}>Logout</a>
            </div>
        )
    }
}