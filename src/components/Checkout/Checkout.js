import React from 'react';
import { Card, Col, Container, FloatingLabel, Form, Image, Row } from 'react-bootstrap';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useParams } from 'react-router-dom';
import auth from '../../firebase.init';
import useServices from '../../hooks/useServices';
import './Checkout.css';

const Checkout = () => {
    const [services] = useServices();
    const { planId } = useParams();
    const [user] = useAuthState(auth)
    const selectedPlan = services.find(service => service.id == planId);
    let paymentId = Math.floor(Math.random() * 10000);
    console.log(user);
    return (
        <div>
            <div className='checkout-container'>
                <Container fluid>
                    <Row>
                        <Col xs={12} md={7} lg={7}>
                            <Card>
                                <Card.Img variant="top" src={selectedPlan?.img} />
                                <Card.Body>
                                    <Card.Text className='payment-body'>
                                        <h5>Plan: {selectedPlan?.plan}</h5>
                                        <p>Price: ${selectedPlan?.price}</p>
                                        <p>Desciption: {selectedPlan?.desc}</p>
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col xs={12} md={5} lg={5}>
                            <div className="payment-style">
                                <h5>Pay for your trip</h5>
                                <Form>
                                    <p>Payment Id</p>
                                    <FloatingLabel
                                        controlId="floatingInput"
                                        label={paymentId}
                                        className="mb-3">
                                        <Form.Control type="name" name='name' placeholder="Your Name" disabled />
                                    </FloatingLabel>

                                    <p>Name</p>
                                    <FloatingLabel
                                        controlId="floatingInput"
                                        label={user?.displayName}
                                        className="mb-3">
                                        <Form.Control type="name" name='name' placeholder="Your Name" disabled />
                                    </FloatingLabel>

                                    <p>Email Verified</p>
                                    <FloatingLabel
                                        controlId="floatingInput"
                                        label={user?.emailVerified ? `${user?.email}(verified)` : `${user?.email}(Not verified)`}
                                        className="mb-3">
                                        <Form.Control type="name" name='name' placeholder="Your Name" disabled />
                                    </FloatingLabel>

                                    <FloatingLabel
                                        controlId="floatingInput"
                                        label="Card Number"
                                        className="mb-3">
                                        <Form.Control type="name" name='name' placeholder="Card Number" required />
                                    </FloatingLabel>
                                    <FloatingLabel
                                        controlId="floatingInput"
                                        label="Region"
                                        className="mb-3">
                                        <Form.Control type="name" name='name' placeholder="Region" required />
                                    </FloatingLabel>
                                    <button className='book-now ps-3 pe-3 pt-2 pb-2 mx-auto' type="submit">Checkout</button>
                                </Form>

                            </div>
                        </Col>
                    </Row>
                </Container>
            </div>
        </div>
    );
};

export default Checkout;