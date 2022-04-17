import React from 'react';
import { Button, Col, Container, Form, Image, Row } from 'react-bootstrap';
import './Login.css';
import {Link, useNavigate} from 'react-router-dom';
import Social from '../Social/Social';
import { useSendPasswordResetEmail, useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import Loading from '../Loading/Loading';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const Login = () => {
    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
      ] = useSignInWithEmailAndPassword(auth);

      const [sendPasswordResetEmail, sending, error1] = useSendPasswordResetEmail(auth);
      const navigate = useNavigate()
      if(loading){
          return <Loading></Loading>
      }
      if(user){
          navigate('/home');
      }
    const handleSignIn =async event =>{
        const email = event.target.email.value;
        const password = event.target.password.value;
        await signInWithEmailAndPassword(email, password);
    }

    const handlePasswordReset = async (event) =>{
        const email = event.target.email.value;
        if(email){
            await sendPasswordResetEmail(email);
            toast("Password reset email sent!")
        }
        else{
            toast("Enter your email!");
        }

    }
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
                            <Form onSubmit={handleSignIn} className='w-75 mx-auto form-style'>
                                <Form.Floating className="mb-3">
                                    <Form.Control
                                        id="floatingInputCustom"
                                        type="email"
                                        name="email"
                                        placeholder="name@example.com"
                                        required
                                    />
                                    <label htmlFor="floatingInputCustom">Email address</label>
                                </Form.Floating>
                                <Form.Floating>
                                    <Form.Control
                                        id="floatingPasswordCustom"
                                        type="password"
                                        name="password"
                                        placeholder="Password"
                                        required
                                    />
                                    <label htmlFor="floatingPasswordCustom">Password</label>
                                </Form.Floating>
                                {error && <p className='text-start text-danger'>{error.message}</p> }
                                <div className='d-flex justify-content-between align-items-center'>
                                    <Form.Group className="" controlId="formBasicCheckbox">
                                        <Form.Check type="checkbox" label="Remember me" />
                                    </Form.Group>
                                    <Button onClick={handlePasswordReset} className='link-style' variant="link">Forgot Password</Button>
                                </div>
                                <Button className='login-btn' type="submit">
                                    Login
                                </Button>
                                <p className='text-start'>Don't have an account? <Link className='link-style' to='/register'>Register Now</Link></p>
                            </Form>
                            <Social></Social>
                            <ToastContainer />
                        </div>
                        
                    </Col>
                </Row>
            </Container>
            
        </div>
    );
};

export default Login;