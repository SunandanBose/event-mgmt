import React from "react"

export default class HeaderLink extends React.Component {
	render() {
		return (<a href={this.props.href} className="link">{this.props.text}</a>)
	}
}