import React from "react";


export default class UserInfoDropDown extends React.Component{
    logOut(){
        localStorage.clear();
        window.location.reload();
    }

    render(){
        return(
            <div className={this.props.DropDownClass}>
                <button>User Info</button>
                <button onClick={this.logOut}>Logout</button>
            </div>
        )
    }
}