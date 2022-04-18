import React from 'react';
import { Col, Container, Row, Table } from 'react-bootstrap';
import './Blogs.css';
const Blogs = () => {
    return (
        <div>
            <Container>
                <Row className='g-4'>
                    <Col xs={12} md={12} lg={12}>
                        <div className="answer-style">
                        <h6>Q.Difference Between Authentication and Authorization</h6>
                        <Table striped bordered hover size="md">
                            <thead>
                                <tr>
                                    <th>#</th>
                                    <th>Authentication</th>
                                    <th>Authorization</th>

                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>1</td>
                                    <td>In this process, Users are checked by their credentials for accessing the feature</td>
                                    <td>This process determines what the users can do and can't do.</td>

                                </tr>
                                <tr>
                                    <td>2</td>
                                    <td>Authentications is done first.</td>
                                    <td>Authorization is done after the authentication.</td>

                                </tr>
                                <tr>
                                    <td>3</td>
                                    <td>Users are verified in this process.</td>
                                    <td>Users are valided in this process.</td>
                                </tr>
                            </tbody>
                        </Table>
                        </div>
                    </Col>
                    <Col xs={12} md={6} lg={6}>
                        <div className="answer-style answer-style1">
                            <h6>Q. Why are you using firebase? What other options do you have to implement authentication?</h6>
                            <p>I am using firebase because of its enhanced fatures and ease of use. It provides a lot features like Authentication, Authorization, Real-time database, Cloud hosting etc. Apart from that learning firebase is so easy. That's why, I love it and use it.
                            <br />
                            There are many other options available for authentication such as Auth0, Okta, Passport, MongoDB, JSON Web Token etc.
                            </p>
                        </div>
                    </Col>
                    <Col xs={12} md={6} lg={6}>
                        <div className="answer-style">
                            <h6>Q.What other services does firebase provide other than authentication?</h6>
                            <p>There are many services firebase provides except authentication such as, </p>
                            <ul>
                                <li>Realiable and Extensive databases</li>
                                <li>Fast and Safe hosting</li>
                                <li>Google Analytics</li>
                                <li> Provides A Free Start to Newbies</li>
                                <li>Free Multi-Platform Firebase Authentication</li>
                            </ul>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default Blogs;