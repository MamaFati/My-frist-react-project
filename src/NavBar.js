//import React from "react";
import logo from "./logo.svg";
export default function NavBar(){
    return(
        <div className="nav">
            <div className="logo">
            <img src= {logo} className='' alt='logo'/>
            <h3>REACTFact</h3>
            </div>
           
            <p> React Course-Project </ p>
          
        </div>
    )
}