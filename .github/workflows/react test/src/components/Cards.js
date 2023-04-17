import React from "react";

function Cards() {
    return (
        <div className="row">
            <div className="col-3 ml-1">
                <div className="card">
                    <div className="card-body">
                        <div className="row">
                            <div className="col-3">
                                <button className="btn"><i className="fa fa-home"></i></button>
                            </div>
                            <div className="col-9">
                                <p className="card-title">Registered Courses</p>
                                <p className="card-title">1</p>
                            </div>
                        </div>
                        <hr />
                        <p className="card-text">Get More details</p>
                    </div>
                </div>
            </div>
            <div className="col-3 ml-1">
                <div className="card">
                    <div className="card-body">
                        <div className="row">
                            <div className="col-3">
                                <button className="btn"><i className="fa fa-bars"></i></button>
                            </div>
                            <div className="col-9">
                                <p className="card-title">Orders Completed</p>
                                <p className="card-title">1</p>
                            </div>
                        </div>
                        <hr />
                        <p className="card-text">Get More details</p>
                    </div>
                </div>
            </div>
            <div className="col-3 ml-1">
                <div className="card">
                    <div className="card-body">
                        <div className="row">
                            <div className="col-3">
                                <button className="btn"><i className="fa fa-home"></i></button>
                            </div>
                            <div className="col-9">
                                <p className="card-title">Fixed Issues</p>
                                <p className="card-title">75</p>
                            </div>
                        </div>
                        <hr />
                        <p className="card-text">Get More details</p>
                    </div>
                </div>
            </div>
            <div className="col-3 ml-1">
                <div className="card">
                    <div className="card-body">
                        <div className="row">
                            <div className="col-3">
                                <button className="btn"><i className="fa fa-home"></i></button>
                            </div>
                            <div className="col-9">
                                <p className="card-title">Help</p>
                                <p className="card-title"></p>
                            </div>
                        </div>
                        <hr />
                        <p className="card-text">Get More details</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Cards;