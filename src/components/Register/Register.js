import { sendEmailVerification } from 'firebase/auth';
import React, { useState } from 'react';
import {Container, FloatingLabel, Form} from 'react-bootstrap';
import { useCreateUserWithEmailAndPassword, useSendEmailVerification, useUpdateProfile } from 'react-firebase-hooks/auth';
import { Link, useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';
import Loading from '../Loading/Loading';
import Social from '../Social/Social';
import './Register.css';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const Register = () => {
    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
      ] = useCreateUserWithEmailAndPassword(auth);
      const [sendEmailVerification, sending, error2] = useSendEmailVerification(auth);
    const [updateProfile, updating, error1] = useUpdateProfile(auth);
    const navigate = useNavigate()
    const [message, setMessage] = useState('');
    if(loading || updating){
        return <Loading></Loading>
    }
    if(user){
        navigate('/home');
        
        
    }
    if(sending){
        toast("Verification email has been sent!");
    }
    
    const handleCreateUser =async event =>{
        event.preventDefault();
        const name = event.target.name.value;
        const email = event.target.email.value;
        const password = event.target.password.value;
        const ConfirmPassword  = event.target.ConfirmPassword.value;
        if(password.length < 6){
            setMessage("Password's length must be 6")
        }
        else{
            if(password === ConfirmPassword){
                if(!user){
                    await createUserWithEmailAndPassword(email, password);
                    await updateProfile({displayName: name});
                    await sendEmailVerification();
                };
            }
            else{
                setMessage("Passwords didn't match");
            }
        }
    }
    return (
        <div>
            <Container fluid className='register-page'>
                <div className='register-style mx-auto p-4'>
                    <h3>Create a New Account</h3>
                    <form onSubmit={handleCreateUser}>
                        <FloatingLabel
                            controlId="floatingInput"
                            label="Name"
                            className="mb-3">
                            <Form.Control type="name" name='name' placeholder="Your Name" required />
                        </FloatingLabel>
                        <FloatingLabel
                            controlId="floatingInput"
                            label="Email address"
                            className="mb-3">
                            <Form.Control type="email" name='email' placeholder="name@example.com" required />
                        </FloatingLabel>
                        <FloatingLabel className="mb-3" controlId="floatingPassword" label="Password">
                            <Form.Control type="password" name="password" placeholder="Password" required />
                        </FloatingLabel>
                        <FloatingLabel controlId="floatingPassword" label="Confirm Password">
                            <Form.Control type="password" name="ConfirmPassword" placeholder="Confirm Password" required />
                        </FloatingLabel>
                        {error && <p className='text-start text-danger mb-0 mt-1'>{error.message}</p>}
                        {message && <p className='text-start text-danger mb-0 mt-1'>{message}</p>}
                        <button className='w-100 mt-3 login-btn' type="submit">Register</button>
                    </form>
                    <p className='text-start m-2'>Already have an account?<Link className='text-primary ms-1 fw-bold' to='/login'>Login</Link> </p>
                    <Social></Social>
                </div>
            </Container>
            <ToastContainer />
        </div>
    );
};

export default Register;