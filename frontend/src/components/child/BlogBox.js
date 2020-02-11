import React from "react";
import "../../css/blog.css";
import { withRouter } from 'react-router-dom'

class BlogBox extends React.Component{

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
                <h4>{this.props.body}</h4>
            </div>
        )
    }
}

export default withRouter(BlogBox);
