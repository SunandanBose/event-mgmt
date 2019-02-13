import React from "react";
import ReactDOM from "react-dom";
import Main from "./components/Main";
import "./css/index.css";
import {Provider} from "react-redux";
import store from './store/index';
import ErrorBoundary from "./components/ErrorBoundary";

ReactDOM.render(
	<ErrorBoundary>
		<Provider store={store}>
			<Main/>
		</Provider>
	</ErrorBoundary>,
	document.getElementById("root")
);
