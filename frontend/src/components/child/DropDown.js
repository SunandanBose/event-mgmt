import React from "react";

export default class DropDown extends React.Component{
    render(){
        return(
            <div className={this.props.DropDownClass}>
                <a href="#">User Info</a>
                <a href="#">logout</a>
            </div>
        )
    }
}