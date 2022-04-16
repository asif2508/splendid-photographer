import React from 'react';
import { Button, Card, Col } from 'react-bootstrap';
import './Service.css';

const Service = (props) => {
    const {img, plan, desc, price} = props.service;
    const {service_1, service_2, service_3, service_4, service_5 } = props.service;
    return (
        <Col xs={12} md={4} lg={4}>
            <Card>
                <Card.Img variant="top" src={img} />
                <Card.Body className='card-body'>
                    <Card.Title><h3>{plan}</h3></Card.Title>
                    <Card.Text>
                        <p><small>{desc}</small></p>
                        <p>{service_1}</p>
                        <p>{service_2}</p>
                        <p>{service_3}</p>
                        <p>{service_4}</p>
                        <p>{service_5}</p>
                    </Card.Text>
                    
                </Card.Body>
            </Card>
        </Col>
    );
};

export default Service;