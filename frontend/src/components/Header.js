import React from "react"
import "../css/header.css"
import HeaderLink from "./child/HeaderLink";

export default class Header extends React.Component {
	render() {
		return (
			<div className="header-fixed">
				<div className="heading">
					<h1 className="inline">Vlog site</h1>
					<ul className="authorization">
						<li><HeaderLink href="#" text="Login"/></li>
						<li><HeaderLink href="#" text="Sign up"/></li>
					</ul>
				</div>
			</div>)
	}
}