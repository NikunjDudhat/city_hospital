import React from 'react';
import { Button, Form, FormGroup, Input, Label } from 'reactstrap';

function Login(props) {
    return (
        <main id="main">
            <section id="contact" className="contact">
                <div className="container">
                    <div className='login' style={{width: "50%", margin: "auto"}}>
                        <h3 className='text-center'>Login</h3>
                        <Form>
                            <FormGroup>
                                <Label for="exampleEmail">
                                    Email
                                </Label>
                                <Input
                                    id="exampleEmail"
                                    name="email"
                                    placeholder="with a placeholder"
                                    type="email"
                                />
                            </FormGroup>
                            <FormGroup>
                                <Label for="examplePassword">
                                    Password
                                </Label>
                                <Input
                                    id="examplePassword"
                                    name="password"
                                    placeholder="password placeholder"
                                    type="password"
                                />
                            </FormGroup>
                            <Button type='submit'>Submit</Button>
                        </Form>
                    </div>
                </div>
            </section>
        </main>
    );
}

export default Login;