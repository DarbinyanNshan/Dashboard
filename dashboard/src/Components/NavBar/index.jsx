import React from "react";
import { NavLink } from "react-router-dom";
import "./style.css"


export const NavBar = () =>  {

    return <div >
          <ul className="NavBar">
            <li><div><NavLink className="navlink" to="/" >About ME</NavLink></div></li>
            <li><div><NavLink className="navlink" to="/apply" >Apply</NavLink></div></li>
            <li><div><NavLink className="navlink"  to="/users" >Users</NavLink></div></li>


          </ul>
    </div>
}