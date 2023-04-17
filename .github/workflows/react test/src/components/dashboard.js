import React from "react";
import Cards from './Cards';
import { Outlet, Link } from "react-router-dom";

function Dashboard() {
    return (
        <div className="row m-1">
            <div className="col-12">
                <Cards />
                <ul className="nav nav-tabs mt-2" id="myTab" role="tablist">
                    <li className="nav-item" role="presentation">
                        <button className="nav-link active" id="home-tab" data-bs-toggle="tab"
                            data-bs-target="#home-tab-pane" type="button" role="tab"
                            aria-controls="home-tab-pane" aria-selected="true">
                            <Link to="/dashboard/my-info">My Info</Link>
                        </button>
                    </li>
                    <li className="nav-item" role="presentation">
                        <button className="nav-link" id="profile-tab" data-bs-toggle="tab"
                            data-bs-target="#profile-tab-pane" type="button" role="tab"
                            aria-controls="profile-tab-pane" aria-selected="false">
                            <Link to="/dashboard/school-info">School Info</Link>
                        </button>
                    </li>
                    <li className="nav-item" role="presentation">
                        <button className="nav-link" id="contact-tab" data-bs-toggle="tab" 
                        data-bs-target="#contact-tab-pane" type="button" role="tab" 
                        aria-controls="contact-tab-pane" aria-selected="false">
                             <Link to="/dashboard/parent">Parent/Guardian</Link>
                            </button>
                    </li>
                    <li className="nav-item" role="presentation">
                        <button className="nav-link" id="contact-tab" data-bs-toggle="tab"
                         data-bs-target="#contact-tab-pane" type="button" role="tab" 
                         aria-controls="contact-tab-pane" aria-selected="false">
                             <Link to="/dashboard/courses">Course Registration</Link></button>
                    </li>
                </ul>
                <div className="tab-content" id="myTabContent">
                    <Outlet />
                    {/* <div className="tab-pane fade show active" id="home-tab-pane" role="tabpanel" aria-labelledby="home-tab" tabIndex="0"><MyInfo /></div>
                    <div className="tab-pane fade" id="profile-tab-pane" role="tabpanel" aria-labelledby="profile-tab" tabIndex="0"><SchoolInfo /></div>
                    <div className="tab-pane fade" id="contact-tab-pane" role="tabpanel" aria-labelledby="contact-tab" tabIndex="0"><Parent /></div> */}
                </div>
            </div>
        </div>
    )
}

export default Dashboard;