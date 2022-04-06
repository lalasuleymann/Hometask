import React from "react";
import "./Navbar.css";
import { NavLink } from "react-router-dom";

const Navbar = () =>{
    return(
        <nav className="navbar navbar-extended-lg navbar-mainbg">
            <NavLink className="navbar navbar-extended-lg navbar-mainbg" to="/" exact>Navbar</NavLink>

                <ul className="navbar-nav ml-auto">
                    <li className="nav-item active">
                        <NavLink className="nav-link" to="/" exact> Home</NavLink>
                    </li>
                    <li className="nav-item active">
                        <NavLink className="nav-link" to="/about" exact> About</NavLink>
                    </li>
                    <li className="nav-item active">
                        <NavLink className="nav-link" to="/blog" exact> Blog</NavLink>
                    </li>
                </ul>
        </nav>
    )
}

export default Navbar;