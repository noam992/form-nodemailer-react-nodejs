import React,{ Component } from "react";
import "./menu.css";
import { NavLink } from "react-router-dom";

export class Menu extends Component {
    public render () {
        return (
            <div className="menu">
                <NavLink to="/main" exact>main</NavLink>
                <NavLink to="/about" exact>about</NavLink>
                <NavLink to="/contact" exact>contact</NavLink>
            </div>
        )
    }
}