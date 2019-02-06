import React from "react";
import ReactDOM from "react-dom";
import Main from "./components/Main";
import "./css/index.css";
import {Provider} from "react-redux";
import store from './store/index';

ReactDOM.render(
	<Provider store={store}>
		<Main/>
	</Provider>,
	document.getElementById("root")
);
