import { Form, Formik, useFormik } from 'formik';
import React from 'react';
import * as yup from 'yup';

function Appointment(props) {

    let schema = yup.object().shape({
        name: yup.string().required("please enter name"),
        email: yup.string().email("please enter valid email").required("please enter email"),
        phone: yup.number().required("please enter number"),
        date: yup.string().required("please select date"),
        department: yup.string().required("please select department")
    });

    const formik = useFormik({
        initialValues: {
            name: '',
            email: '',
            phone: '',
            date: '',
            department: '',
        },
        validationSchema: schema,
        onSubmit: values => {
            console.log(JSON.stringify(values, null, 2));
        },
    });

    return (
        <main id="main">
            <section id="appointment" className="appointment">
                <div className="container">
                    <div className="section-title">
                        <h2>Make an Appointment</h2>
                        <p>Aenean enim orci, suscipit vitae sodales ac, semper in ex. Nunc aliquam eget nibh eu euismod. Donec dapibus
                            blandit quam volutpat sollicitudin. Fusce tincidunt sit amet ex in volutpat. Donec lacinia finibus tortor.
                            Curabitur luctus eleifend odio. Phasellus placerat mi et suscipit pulvinar.</p>
                    </div>
                    <Formik values={formik}>
                        <Form key={formik} onSubmit={formik.handleSubmit} action method="post" role="form" className="php-email-form">
                            <div className="row">
                                <div className="col-md-4 form-group">
                                    <input
                                        type="text"
                                        name="name"
                                        className="form-control"
                                        id="name"
                                        placeholder="Your Name"
                                        data-rule="minlen:4"
                                        data-msg="Please enter at least 4 chars"
                                        onChange={formik.handleChange}
                                        value={formik.values.name} />
                                    {
                                        formik.errors.name ? <p className='error'>{formik.errors.name}</p> : null
                                    }
                                </div>
                                <div className="col-md-4 form-group mt-3 mt-md-0">
                                    <input
                                        type="email"
                                        className="form-control"
                                        name="email"
                                        id="email"
                                        placeholder="Your Email"
                                        onChange={formik.handleChange}
                                        value={formik.values.email} />
                                    {
                                        formik.errors.email ? <p className='error'>{formik.errors.email}</p> : null
                                    }
                                </div>
                                <div className="col-md-4 form-group mt-3 mt-md-0">
                                    <input
                                        type="tel"
                                        className="form-control"
                                        name="phone"
                                        id="phone"
                                        maxLength={10}
                                        placeholder="Your Phone"
                                        onChange={formik.handleChange}
                                        value={formik.values.phone} />
                                    {
                                        formik.errors.phone ? <p className='error'>{formik.errors.phone}</p> : null
                                    }
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-md-4 form-group mt-3">
                                    <input
                                        type="datetime"
                                        name="date"
                                        className="form-control datepicker"
                                        id="date"
                                        placeholder="Appointment Date"
                                        onChange={formik.handleChange}
                                        value={formik.values.date} />
                                    {
                                        formik.errors.date ? <p className='error'>{formik.errors.date}</p> : null
                                    }
                                </div>
                                <div className="col-md-4 form-group mt-3">
                                    <select name="department" id="department" className="form-select" onChange={formik.handleChange}
                                        value={formik.values.select}>
                                        <option value>Select Department</option>
                                        <option value="Department 1">Department 1</option>
                                        <option value="Department 2">Department 2</option>
                                        <option value="Department 3">Department 3</option>
                                    </select>
                                    {
                                        formik.errors.department ? <p className='error'>{formik.errors.department}</p> : null
                                    }
                                </div>
                            </div>
                            <div className="form-group mt-3">
                                <textarea
                                    className="form-control"
                                    name="message" rows={5}
                                    placeholder="Message (Optional)"
                                    defaultValue={""}
                                    onChange={formik.handleChange}
                                    value={formik.values.message} />
                            </div>
                            <div className="mb-3">
                                <div className="loading">Loading</div>
                                <div className="error-message" />
                                <div className="sent-message">Your appointment request has been sent successfully. Thank you!</div>
                            </div>
                            <div className="text-center"><button type="submit">Submit</button></div>
                        </Form>
                    </Formik>
                </div>
            </section>
        </main>

    );
}

export default Appointment;