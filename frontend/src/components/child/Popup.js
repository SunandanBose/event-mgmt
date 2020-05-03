import React from "react";
import '../../css/popup.css'

/*
    
    you should pass popup and closeMe as props
    <Popup popup = {this.state.showPopup} closeMe={() => {this.closeMe()}}>
        <CHILD COMPONENT />
    </Popup> 

*/

const Popup = props => {
  return (
    <div className={props.popup ? "popup" : "hide"}>
      <div className="popup_inner">
        {props.children}
        <button onClick={ props.closeMe}>Close</button>
      </div>
    </div>
  );
};

export default Popup;