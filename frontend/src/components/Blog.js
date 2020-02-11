import React from "react";

export default class Blog extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            picture : ""
        }
    }

    componentDidMount() {
		fetch('http://localhost:8080/image/'+this.props.location.event.id, {
			method: 'GET',
			mode: "cors",
			headers: {
				//'Accept': 'application/json',
				//'Content-Type': 'application/json',
				'Bearer' : this.props.token
			},
        })
        .then((res) => {

            this.setState({picture : res.body});
		})
			.catch(e => alert("You currently don't have any events"));
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