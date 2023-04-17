import React from "react";
import { Outlet, Link } from "react-router-dom";
import './sidemenu.css';
function Sidemenu() {
    return (
        <nav className="m-2 side-nav">
            <ul className="nav flex-column p-2 m-2 sidemenu-links">
                <li className="p-2 side-menu-active">
                    <Link  to="/dashboard/my-info">Dashboard</Link>
                </li>
                <li className="p-2">
                    <Link to="/our-programs">Our Programs</Link>
                </li>
                <li className="p-2">
                    <Link to="/my-schedule">My Schedule</Link>
                </li>
                <li className="p-2">
                    <Link to="/my-schedule">My Orders</Link>
                </li>
                <li className="p-2">
                    <Link to="/my-schedule">Transcrpts</Link>
                </li>
                <li className="p-2">
                    <Link to="/my-schedule">Survey</Link>
                </li>
                <li className="p-2">
                    <Link to="/my-schedule">Log Out</Link>
                </li>
            </ul>
        </nav>
    )
}

export default Sidemenu;