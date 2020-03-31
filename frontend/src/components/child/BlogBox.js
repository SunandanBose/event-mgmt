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
        this.fetchImage = this.fetchImage.bind(this);
	}

    truncateString(){
        let blog = this.props.title;
        if(blog.length > 80)
            return {__html: blog.substring(0,80)+". . ."};
        return {__html: blog}
        
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
				this.props.deleteBlog(this.props.id);
			});
    }

    fetchImage(blogid){
        return'http://'+hostname+':8080/image/'+blogid;
    }

    render(){
        return (
            <div className={"blog box"}>
                <div className={"blog thumbnail"}>
                    <img className={"blog image"} src={this.fetchImage(this.props.id)} alt="blog"/>
                </div>
                <div className={"blog info"}>
                    <div  className={"title"} 
                    dangerouslySetInnerHTML={this.truncateString()}
                    onClick={() => this.props.history.push({
                    pathname: '/blog',
                    event : {
                                id : this.props.id,
                                title : this.props.title,
                                body : this.props.body,
                                token : this.props.token
                            },     

                    })}></div>
                    <div className="cross">
                        <FontAwesomeIcon icon={ faTimesCircle } onClick={this.deleteBlog}/>
                    </div>
                </div>
            </div>
        )
    }
}

export default withRouter(BlogBox);
