import React from 'react';
import { NavLink } from 'react-router-dom';

function Tabs(props) {
    return (
        <div className='row navbar mb-5'>
            <div className='col-6 text-center'>
                <NavLink to={"/Appointment"} className="nav-link scrollto d-inline-block">Appointment</NavLink>
            </div>
            <div className='col-6 text-center'>
                <NavLink to={"/List_data"} className="nav-link scrollto d-inline-block">List Data</NavLink>
            </div>
        </div>
    );
}

export default Tabs;