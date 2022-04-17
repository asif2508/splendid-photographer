import React from 'react';
import { Card, Col, Image } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import './Review.css';
const Review = (props) => {
    const {name, desc, rating,img} = props.review;
    return (
        <Col xs={12} md={4} lg={4}>
            <Card className='d-flex justify-content-center align-items-center flex-column p-3 review-style'>
                <p>{desc}</p>
                <Image src={img} roundedCircle height={50} width={56}/>
                <p><strong>{name}</strong></p>
                {rating &&
                <p>
                <FontAwesomeIcon className='star-style' icon={faStar}></FontAwesomeIcon>
                <FontAwesomeIcon className='star-style' icon={faStar}></FontAwesomeIcon>
                <FontAwesomeIcon className='star-style' icon={faStar}></FontAwesomeIcon>
                <FontAwesomeIcon className='star-style' icon={faStar}></FontAwesomeIcon>
                <FontAwesomeIcon className='star-style' icon={faStar}></FontAwesomeIcon>
                </p>
                }
            </Card>
        </Col>
    );
};

export default Review;