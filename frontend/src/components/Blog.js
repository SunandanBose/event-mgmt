import React from "react";
import {hostname} from "../constants/properties";
import "../css/blog.css"

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
                <h1>{this.props.location.event.title}</h1>
                <h3>{this.props.location.event.body}</h3>
                <img className="image" src={this.state.picture} alt="blog"/>
            </div>
        )
    }
}