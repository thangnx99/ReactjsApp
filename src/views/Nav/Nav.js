import React from "react";
import './Nav.scss'
import {
    NavLink
} from "react-router-dom";
class Nav extends React.Component {

    // e.preventDefault()
    render() {
        return (
            <div className="topnav">
                <NavLink to="/home" activeClassName="active">Home</NavLink>
                <NavLink to="/user" activeClassName="active">Users</NavLink>
                <NavLink to="/todos" activeClassName="active">Todos</NavLink>
                <NavLink to="/about" activeClassName="active">About</NavLink>
            </div>
        )
    }
}


export default Nav;