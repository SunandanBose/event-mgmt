import React,{Component} from "react";
import Event from "./Event";
import "../../css/index.css";


export default class TextField extends Component{
    render(){
        return(
            <div>
                <h2>{this.props.label}</h2>
                <textarea id={this.props.id} rows={this.props.row} cols={this.props.column} onChange={this.props.handleChange}></textarea>
            </div>
        )
    }
}