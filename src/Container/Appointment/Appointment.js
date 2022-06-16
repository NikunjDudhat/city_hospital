// import { TextField } from '@mui/material';
import { Form, Formik, useFormik } from 'formik';
import React from 'react';
import { useHistory } from 'react-router-dom';
import * as yup from 'yup';
import InputBox from '../../Components/InputBox/InputBox';
import Tabs from '../Tab/Tabs';

function Appointment(props) {
    const history = useHistory()
    

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
            message: '',
        },
        validationSchema: schema,
        onSubmit: (values, { resetForm }) => {

            const {
                name,
                email,
                phone,
                date,
                department,
                message
            } = values;
            let Data = {
                name,
                email,
                phone,
                date,
                department,
                message
            }
            let appoinData = JSON.parse(localStorage.getItem("appointment"));

            if(appoinData == null){
                localStorage.setItem("appointment", JSON.stringify([Data]))
            }else{
                appoinData.push(Data)
                localStorage.setItem("appointment", JSON.stringify(appoinData))
            }
            console.log(Data);

            resetForm();
            history.push("/List_data");
        },
    });

    const {handleChange, handleSubmit, errors} = formik;

    console.log(errors);

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
                    <Formik values={formik}>
                        <Form onSubmit={handleSubmit} className="php-email-form">
                            <div className="row">
                                <div className="col-md-4 form-group">
                                    <InputBox
                                        type="text"
                                        name="name"
                                        className="form-control"
                                        id="name"
                                        placeholder="Your Name"
                                        error = {Boolean(errors.name)}
                                        errorMessages = {errors.name}
                                        onChange={handleChange}
                                        value={formik.values.name} />
                                </div>
                                <div className="col-md-4 form-group mt-3 mt-md-0">
                                    <input
                                        type="email"
                                        className="form-control"
                                        name="email"
                                        id="email"
                                        placeholder="Your Email"
                                        error = {Boolean(errors.email)}
                                        errorMessages = {errors.email}
                                        onChange={handleChange}
                                        value={formik.values.email} />
                                </div>
                                <div className="col-md-4 form-group mt-3 mt-md-0">
                                    <input
                                        type="tel"
                                        className="form-control"
                                        name="phone"
                                        id="phone"
                                        maxLength={10}
                                        placeholder="Your Phone"
                                        error = {Boolean(errors.phone)}
                                        errorMessages = {errors.phone}
                                        onChange={handleChange}
                                        value={formik.values.phone} />
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-md-4 form-group mt-3">
                                    <input
                                        type="date"
                                        name="date"
                                        className="form-control datepicker"
                                        id="date"
                                        placeholder="Appointment Date"
                                        error = {Boolean(errors.date)}
                                        errorMessages = {errors.date}
                                        onChange={handleChange}
                                        value={formik.values.date} />
                                </div>
                                <div className="col-md-4 form-group mt-3">
                                    <select name="department" id="department" className="form-select" onChange={handleChange}
                                        value={formik.values.select} error = {Boolean(errors.department)} errorMessages = {errors.department}>
                                        <option disabled selected>Select Department</option>
                                        <option value="Department 1">Department 1</option>
                                        <option value="Department 2">Department 2</option>
                                        <option value="Department 3">Department 3</option>
                                    </select>
                                </div>
                            </div>
                            <div className="form-group mt-3">
                                <textarea
                                    className="form-control"
                                    name="message" rows={5}
                                    placeholder="Message (Optional)"
                                    defaultValue={""}
                                    error = {Boolean(errors.message)}
                                    errorMessages = {errors.message}
                                    onChange={handleChange}
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