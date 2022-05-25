import React, {useState} from 'react';
import {Button, FormGroup, Input, Label} from 'reactstrap';
import * as yup from 'yup';
import {Formik, Form, useFormik} from 'formik';

function Login(props) {
    const [useType, setUseType] = useState("Login");
    const [Reset, setReset] = useState(false);

    const login = {
        email: yup.string().email("please enter valid email").required("please enter email"),
        password: yup.string().required("please enter Password")
    }

    let schema = yup.object().shape(login);

    const formik = useFormik({
        initialValues: {
            email: '',
            password: ''

        },
        validationSchema: schema,
        onSubmit: values => {
            alert(JSON.stringify(values, null, 2));
        },
    });


    console.log(formik.errors.email);

    return (
        <main id="main">
            <section id="contact" className="contact">
                <div className="container">
                    <div className='login' style={{width: "50%", margin: "auto"}}>
                        {
                            Reset ? <h3 className='text-center'>Forgot Password</h3> :
                                useType === "Login" ?
                                    <h3 className='text-center'>Login</h3> :
                                    <h3 className='text-center'>Sign Up</h3>
                        }
                        <Formik value={formik}>
                            <Form>
                                Reset ?
                                <FormGroup>
                                    <Label for="exampleEmail">
                                        Email
                                    </Label>
                                    <Input
                                        id="exampleEmail"
                                        name="email"
                                        placeholder="Enter Email"
                                        type="email"
                                    />
                                </FormGroup> :
                                {
                                    useType === "SignUp" ?
                                        <FormGroup>
                                            <Label for="exampleEmail">
                                                Name
                                            </Label>
                                            <Input
                                                id="exampleEmail"
                                                name="Name"
                                                placeholder="Enter Name"
                                                type="text"
                                                onChange={formik.handleChange}
                                            />
                                        </FormGroup> :
                                        null
                                }
                                <FormGroup>
                                    <Label for="exampleEmail">
                                        Email
                                    </Label>
                                    <Input
                                        id="exampleEmail"
                                        name="email"
                                        placeholder="Enter Email"
                                        type="email"
                                        onChange={formik.handleChange}
                                    />
                                </FormGroup>
                                <FormGroup>
                                    <Label for="examplePassword">
                                        Password
                                    </Label>
                                    <Input
                                        id="examplePassword"
                                        name="password"
                                        placeholder="password"
                                        type="password"
                                        onChange={formik.handleChange}
                                    />
                                </FormGroup>
                                {
                                    useType === "Login" ?
                                        <div className="text-center">
                                            <Button type='button'
                                                    className="appointment-btn scrollto m-0">Login</Button>
                                            <p className="mt-3" onClick={() => setReset(true)}>Forgot Password</p>
                                            <Button type='button' className="appointment-btn scrollto m-0"
                                                    onClick={() => setUseType("SignUp")}>Sign Up</Button>
                                        </div> :
                                        <div className="text-center">
                                            <Button type='button' className="appointment-btn scrollto m-0">Sign
                                                Up</Button>
                                            <Button type='button' className="appointment-btn scrollto m-0"
                                                    onClick={() => setUseType("Login")}>Login</Button>
                                        </div>
                                }
                            </Form>
                        </Formik>
                    </div>
                </div>
            </section>
        </main>
    );
}

export default Login;