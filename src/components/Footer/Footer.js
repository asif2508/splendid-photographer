import React from 'react';
import './Footer.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {  faFacebookSquare, faTwitterSquare, faInstagramSquare } from '@fortawesome/free-brands-svg-icons';
const Footer = () => {
    let date = new Date();
    let year = date.getFullYear()
    return (
        <div className='footer-style'>
            <p>All rights reserved by Splendid Photographer © {year} </p>
            <div className='mt-0'>
                <FontAwesomeIcon className='footer-icon' icon={faFacebookSquare}></FontAwesomeIcon>
                <FontAwesomeIcon className='footer-icon' icon={faTwitterSquare}></FontAwesomeIcon>
                <FontAwesomeIcon className='footer-icon' icon={faInstagramSquare}></FontAwesomeIcon>
            </div>
            </div>
    );
};

export default Footer;