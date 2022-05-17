import React from 'react';

function Count(props) {
    return (
        <>
            <div>
                <section id="why-us" className="why-us">
                </section>
                <section id="counts" className="counts">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-3 col-md-6">
                                <div className="count-box">
                                    <i className="fas fa-user-md" />
                                    <span>23</span>
                                    <p>Doctors</p>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-6 mt-5 mt-md-0">
                                <div className="count-box">
                                    <i className="far fa-hospital" />
                                    <span>18</span>
                                    <p>Departments</p>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-6 mt-5 mt-lg-0">
                                <div className="count-box">
                                    <i className="fas fa-heartbeat" />
                                    <span>980</span>
                                    <p>Patients</p>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-6 mt-5 mt-lg-0">
                                <div className="count-box">
                                    <i className="fas fa-award" />
                                    <span>12</span>
                                    <p>Awards</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </>
    );
}

export default Count;