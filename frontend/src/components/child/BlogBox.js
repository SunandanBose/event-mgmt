import React from "react";
import "../../css/blog.css";
import { withRouter } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTimesCircle } from '@fortawesome/free-solid-svg-icons'
import {hostname} from "../../constants/properties"


class BlogBox extends React.Component{

    constructor(props) {
		super(props);
		this.truncateString = this.truncateString.bind(this);
        this.deleteBlog = this.deleteBlog.bind(this);
	}

    truncateString(){
        let blog = this.props.body;
        return {__html: blog.substring(0,80)};
    }

    deleteBlog(){
		fetch('http://'+hostname+':8080/blogs/' + this.props.id , {
			method: 'DELETE',
			mode: "cors",
			headers: {
				'Accept': 'application/json',
				'Content-Type': 'application/json'
			},

		}).then(res => {
				//this.props.history.push('/');
			});
    }

    render(){
        return (
            <div className="blog box">
                <div>
                    <div  className="title"> {this.props.title} </div>
                    <div className="cross">
                        <FontAwesomeIcon icon={ faTimesCircle } onClick={this.deleteBlog}/>
                    </div>
                </div>
                <div className="body" onClick={() => this.props.history.push({
                    pathname: '/blog',
                    event : {
                                id : this.props.id,
                                title : this.props.title,
                                body : this.props.body,
                                token : this.props.token
                            },     

                    })}>
                    <h4><div dangerouslySetInnerHTML={this.truncateString()} /></h4>
                </div>
            </div>
        )
    }
}

export default withRouter(BlogBox);
