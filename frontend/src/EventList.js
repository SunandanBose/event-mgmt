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
        fetch('http://localhost:8080/users/1/events', {
			method: 'GET',
			mode: "cors",
			headers: {
				'Accept': 'application/json',
				'Content-Type': 'application/json'
			},

		}).then(res => res.json())
		.then(json => {
			console.log(json);
			this.setState({ items: json })
		})
		.catch(e => alert("You currently don't have any notification" + e));
    }

    render(){
        return(
            <div>
				<ul>
					{this.state.items.map(e => <li><Event data={e}/></li>)}
				</ul>
            </div>
        )
    }
}