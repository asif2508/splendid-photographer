import React from 'react';
import { Button, Card, Col } from 'react-bootstrap';
import './Service.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck, faCheckCircle } from '@fortawesome/free-solid-svg-icons';
import {Link} from 'react-router-dom';

const Service = (props) => {
    const {id,img, plan, desc, price} = props.service;
    const {service_1, service_2, service_3, service_4, service_5 } = props.service;
    return (
        <Col xs={12} md={4} lg={4}>
            <Card className='card-style'>
                <Card.Img variant="top" src={img} />
                <Card.Body className='card-body'>
                    <Card.Title><h3>{plan}</h3></Card.Title>
                    <Card.Text>
                        <h3 className='text-start'>${price}</h3>
                        <p><small>{desc}</small></p>
                        <p><FontAwesomeIcon className='sign-icon' icon={faCheckCircle}></FontAwesomeIcon>{service_1}</p>
                        <p><FontAwesomeIcon className='sign-icon' icon={faCheckCircle}></FontAwesomeIcon>{service_2}</p>
                        <p><FontAwesomeIcon className='sign-icon' icon={faCheckCircle}></FontAwesomeIcon>{service_3}</p>
                        <p><FontAwesomeIcon className='sign-icon' icon={faCheckCircle}></FontAwesomeIcon>{service_4}</p>
                        <p><FontAwesomeIcon className='sign-icon' icon={faCheckCircle}></FontAwesomeIcon>{service_5}</p>
                        
                    </Card.Text>
                    <Link className='book-now' to={`/Checkout/${id}`}>Book Now</Link> 
                </Card.Body>
            </Card>
        </Col>
    );
};

export default Service;