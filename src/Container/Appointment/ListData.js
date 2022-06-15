// import { TextField } from '@mui/material';
import { Form, Formik, useFormik } from 'formik';
import React from 'react';
import * as yup from 'yup';
import Tabs from '../Tab/Tabs';

function ListData(props) {

    return (
        <main id="main">
            <section id="appointment" className="appointment">
                <div className="container">
                    {/* <TextField id="outlined-basic" label="Outlined" variant="outlined" /> */}
                    <div className="section-title">
                        <h2>Make an Appointment</h2>
                        <p>Aenean enim orci, suscipit vitae sodales ac, semper in ex. Nunc aliquam eget nibh eu euismod. Donec dapibus
                            blandit quam volutpat sollicitudin. Fusce tincidunt sit amet ex in volutpat. Donec lacinia finibus tortor.
                            Curabitur luctus eleifend odio. Phasellus placerat mi et suscipit pulvinar.</p>
                    </div>
                    <Tabs/>
                </div>
            </section>
        </main>

    );
}

export default ListData;