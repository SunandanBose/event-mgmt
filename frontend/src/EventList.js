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
        fetch('http://localhost:8080/users/Aakash/notification', {
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
				<table>
                    <thead>
                        <tr>
                            <th>Title</th>
                            <th>Organized By</th>
                            <th>Description</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.state.items.map(e => <Event data={e}/>)}
                    </tbody>
				</table>
            </div>
        )
    }
}