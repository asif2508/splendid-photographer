import React from 'react';
import { Col, Container, Image, Row } from 'react-bootstrap';
import './About.css';
import me from '../../images/banners/me.jpg';

const About = () => {
    return (
        <div className='about-style'>
            <Container>
                <Row>
                    <Col xs={12} md={6} lg={6}>
                        <Image src={me} height={461} width={450}/>
                    </Col>
                    <Col xs={12} md={6} lg={6}>
                        <div className='about-me'>
                            <p>I am Rakibul Hasan Asif. Now I am studying Software Engineering in Yangzhou university in China. My goal is to be a professional Web Application Developer.
                                <br />
                                I want to work with both front-end and backend and I am on my way. I am working hard to achieve my goal. I believe that dedication, patience and persistence can help people to achieve their goal. That's why, I am also trying to holding these three characteristics to make my dream true and achieve my goal.
                            </p>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default About;