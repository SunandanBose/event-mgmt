import React,{Component} from "react";
import Event from "./child/Event";
import "./index.css";


export default class EventList extends Component{
    render(){
        return(
            <div>
				<table className={"border"}>
                    <thead>
                        <tr>
                            <th>Title</th>
                            <th>Organized By</th>
                            <th>Description</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.props.events.map(event => <Event key={event.id} data={event}/>)}
                    </tbody>
				</table>
            </div>
        )
    }
}