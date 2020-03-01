import React from "react";
import "../../css/blog.css";
import { withRouter } from 'react-router-dom'

class BlogBox extends React.Component{

    constructor(props) {
		super(props);
		this.truncateString = this.truncateString.bind(this);
	}

    truncateString(){
        let blog = this.props.body;
        return {__html: blog.substring(0,120)};
    }

    render(){
        return (
            <div className="blog box" onClick={() => this.props.history.push({
                pathname: '/blog',
                event : {
                            id : this.props.id,
                            title : this.props.title,
                            body : this.props.body,
                            token : this.props.token
                        },     

            })}>
                <h1>{this.props.title}</h1>
                <h4><div dangerouslySetInnerHTML={this.truncateString()} /></h4>
            </div>
        )
    }
}

export default withRouter(BlogBox);
