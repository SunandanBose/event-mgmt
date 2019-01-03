import React,{Component} from "react";
import Event from "./child/Event";

export default class EventList extends Component{

    constructor(){
        super();
        this.state = {
            items : []
        }
    }
    componentDidMount(){
        fetch('http://localhost:8080/user/2/events', {
			method: 'GET',
			mode: "cors",
			headers: {
				'Accept': 'application/json',
				'Content-Type': 'application/json'
			},

		}).then(res => res.json())
		.then(json => this.setState({ data: json }))
		.catch(alert("You currently don't have any notification"));
    }

    render(){
        return(
            <div>
                {this.state.items.map(e => <Event data={e}/>)}
            </div>
        )
    }
}