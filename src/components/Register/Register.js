import React from 'react';
import {Container, FloatingLabel, Form} from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Social from '../Social/Social';
import './Register.css';
const Register = () => {
    return (
        <div>
            <Container fluid className='register-page'>
                <div className='register-style mx-auto p-4'>
                    <h3>Create a New Account</h3>
                    <form>
                        <FloatingLabel
                            controlId="floatingInput"
                            label="Name"
                            className="mb-3">
                            <Form.Control type="name" name='name' placeholder="Your Name" />
                        </FloatingLabel>
                        <FloatingLabel
                            controlId="floatingInput"
                            label="Email address"
                            className="mb-3">
                            <Form.Control type="email" name='email' placeholder="name@example.com" />
                        </FloatingLabel>
                        <FloatingLabel controlId="floatingPassword" label="Password">
                            <Form.Control type="password" name="password" placeholder="Password" />
                        </FloatingLabel>
                        

                        <button className='w-100 mt-3 login-btn' type="submit">Register</button>
                    </form>
                    <p className='text-start m-2'>Already have an account?<Link className='text-primary ms-1 fw-bold' to='/login'>Login</Link> </p>
                    <Social></Social>
                </div>
            </Container>
        </div>
    );
};

export default Register;