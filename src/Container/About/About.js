import React from 'react';
import Listing from "../Listing/Listing";

function About(props) {
    const Data = [
        {
            id: 101,
            name: 'Abacavir',
            quantity: 25,
            price: 150,
            expiry: 2022,
            status: true
        },
        {
            id: 102,
            name: 'Eltrombopag',
            quantity: 90,
            price: 550,
            expiry: 2021,
            status: true
        },
        {
            id: 103,
            name: 'Meloxicam',
            quantity: 85,
            price: 450,
            expiry: 2025,
            status: false
        },
        {
            id: 104,
            name: 'Allopurinol',
            quantity: 50,
            price: 600,
            expiry: 2023,
            status: true
        },
        {
            id: 105,
            name: 'Phenytoin',
            quantity: 63,
            price: 250,
            expiry: 2021,
            status: false
        }
    ]
    return (
        <main id="main">
            <section id="about" className="about">
                <div className="container">
                    <div className="row">
                        <div
                            className="col-xl-7 col-lg-6 icon-boxes d-flex flex-column align-items-stretch justify-content-center px-lg-5 abouttop">
                            <h3>Fusce nec risus at enim congue bibendum quis at augue. </h3>
                            <p>Proin tincidunt blandit fermentum. Ut gravida arcu non mi dapibus ullamcorper. Curabitur
                                mollis, turpis eu
                                pellentesque finibus, nisi ex mattis quam, mollis aliquet mi massa non nunc.
                                Pellentesque id felis elit.
                                Pellentesque blandit sem a nisi dictum, in pretium ante tincidunt.</p>
                            <p>Maecenas lobortis, nunc eu porttitor posuere, neque lectus rutrum leo, sit amet rutrum
                                orci eros aliquam
                                mauris. Aliquam erat volutpat. Aenean eget dui ac lectus rutrum aliquam pulvinar ut
                                massa. Duis sagittis
                                rutrum neque, quis tincidunt arcu pretium ac. Suspendisse sem </p>
                        </div>
                    </div>
            <div className="row">
                <Listing
                    data={Data}/>
            </div>
                </div>
            </section>

        </main>

    );
}

export default About;