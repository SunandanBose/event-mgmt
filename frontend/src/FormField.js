import React, { Component } from "react";
import "./index.css";

class FormField extends Component {
	render() {
		return (
			<div>
				<label class="formLabel">{this.props.label}</label>
				<input id="username--26" name={this.props.elementName} type="text" class="formInput" label={this.props.label} onChange={this.props.handleChange} placeholder={this.props.placeholder}/>
			</div>
		)
	}
}

export default FormField;