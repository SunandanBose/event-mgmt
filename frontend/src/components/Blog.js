import React from "react";
import {hostname} from "../constants/properties"

export default class Blog extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            picture : ""
        }
    }

    componentDidMount() {
        const imageUrl = 'http://'+hostname+':8080/image/'+this.props.location.event.id;
		this.setState({ picture: imageUrl })
	}

    render(){
        return(
            <div>
                <img src={this.state.picture} alt="blog"/>
                <h1>{this.props.location.event.title}</h1>
                <h3>{this.props.location.event.body}</h3>
            </div>
        )
    }
}