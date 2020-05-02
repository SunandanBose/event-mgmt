import React from "react";
import {hostname} from "../constants/properties";
import "../css/blog.css"
import Tag from "./child/Tag";

export default class Blog extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            picture : ""
        }
        this.getBody = this.getBody.bind(this);
    }

    getBody(){
        let body = this.props.location.event.body; 
        return {__html: body};
        //return "&lt;p&gt;normal &lt;strong&gt;bold &lt;/strong&gt;&lt;em&gt;itialic &lt;/em&gt;&lt;em&gt;&lt;strong&gt;bold and itialic &lt;/strong&gt;&lt;/em&gt;&lt;u&gt;&lt;strong&gt;bold and underline &lt;/strong&gt;&lt;/u&gt;&lt;del&gt;&lt;u&gt;underline and strike out &lt;/u&gt;&lt;/del&gt;&lt;u&gt;&amp;nbsp;&amp;nbsp;&lt;/u&gt;&amp;nbsp;&amp;nbsp;&amp;nbsp;&lt;strong&gt;Font 36&lt;/strong&gt;&lt;/p&gt;";
    }

    componentDidMount() {
        const imageUrl = 'http://'+hostname+':8080/image/'+this.props.location.event.id;
		this.setState({ picture: imageUrl })
	}

    render(){
        return(
            <div>
                <h1>{this.props.location.event.title}</h1>
                <Tag tags={this.props.location.event.tags} hide={"hide"} />
                <div dangerouslySetInnerHTML={this.getBody()} />
                <img className="image" src={this.state.picture} alt="blog"/>
            </div>
        )
    }
}