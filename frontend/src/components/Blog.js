import React from "react";

export default class Blog extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            picture : ""
        }
    }

    componentDidMount() {
        const imageUrl = 'http://localhost:8080/image/'+this.props.location.event.id;
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