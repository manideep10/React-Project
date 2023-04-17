import React from "react";
import Sidemenu from '../components/Sidemenu';
import { Outlet, Link } from "react-router-dom";

function Layout() {
    return (
        <div className="row pt-2">
            <div className="col-2">
                <Sidemenu />
            </div>
            <div className="col-10">
                <Outlet />
            </div>
        </div>
    )
}

export default Layout;