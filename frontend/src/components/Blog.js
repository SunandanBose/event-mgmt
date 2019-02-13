import React from "react";

export default class Blog extends React.Component{

    render(){
        return(
            <div>
                <h1>{this.props.location.event.title}</h1>
                <h3>{this.props.location.event.body}</h3>
            </div>
        )
    }
}