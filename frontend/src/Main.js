import React, { Component } from "react";
import {
  Route,
  NavLink,
  HashRouter,
  Switch
} from "react-router-dom";

import Home from "./Home";
import Stuff from "./Stuff";
import Contact from "./Contact";
import Registration from "./Registration";

class Main extends Component {
  render() {
    return (
			<HashRouter >
			<div style={{'padding' : '2%'}}>
				<h1 style={{'paddingLeft' : '5%'}}>Simple SPA</h1>
				<div>
					<div style={{'width': '20%' ,'float':'left'}}>
						<ul className="header" style = {{'float' : 'center'}}>
							<li><NavLink exact to="/">Home</NavLink></li>
							<li><NavLink to="/stuff">Notification</NavLink></li>
							<li><NavLink to="/contact">Contact</NavLink></li>
							<li><NavLink to="/event">Registration</NavLink></li>
						</ul>
					</div>
					<div className="menu" >
						<Switch>
							<Route exact path="/" component={Home}/>
							<Route path="/stuff" component={Stuff}/>
							<Route path="/contact" component={Contact}/>             
							<Route path="/event" component={Registration}/>             
						</Switch>
					</div>
				</div>
			</div>
		</HashRouter>
    );
  }
}
 
export default Main;