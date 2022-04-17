import React from 'react';
import { Button, Col, Container, Form, Image, Row } from 'react-bootstrap';
import './Login.css';
import {Link} from 'react-router-dom';
import Social from '../Social/Social';
const Login = () => {
    return (
        <div>
            <Container fluid>
                <Row>
                    <Col xs={12} md={7} lg={7}>
                        <Image src="https://img.freepik.com/free-vector/tablet-login-concept-illustration_114360-7963.jpg?t=st=1650196997~exp=1650197597~hmac=178220bfbffdc22f466d193620b9c5e061140006c40c9d2efeea9656063e7d59&w=740" alt="" width="80%" />
                    </Col>
                    <Col xs={12} md={5} lg={5}>
                        <div className="login-style">
                            <h3 className='text-center'>Login</h3>
                            <Form className='w-75 mx-auto form-style'>
                                <Form.Floating className="mb-3">
                                    <Form.Control
                                        id="floatingInputCustom"
                                        type="email"
                                        placeholder="name@example.com"
                                    />
                                    <label htmlFor="floatingInputCustom">Email address</label>
                                </Form.Floating>
                                <Form.Floating>
                                    <Form.Control
                                        id="floatingPasswordCustom"
                                        type="password"
                                        placeholder="Password"
                                    />
                                    <label htmlFor="floatingPasswordCustom">Password</label>
                                </Form.Floating>
                                <div className='d-flex justify-content-between align-items-center'>
                                    <Form.Group className="" controlId="formBasicCheckbox">
                                        <Form.Check type="checkbox" label="Remember me" />
                                    </Form.Group>
                                    <Button className='link-style' variant="link">Forgot Password</Button>
                                </div>
                                <Button className='login-btn' type="submit">
                                    Login
                                </Button>
                                <p className='text-start'>Don't have an account? <Link className='link-style' to='/register'>Register Now</Link></p>
                            </Form>
                            <Social></Social>
                        </div>
                        
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default Login;