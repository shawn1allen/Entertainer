import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faInstagram } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'; // Use free-solid-svg-icons for regular icons
import './Footer.css'; // Import the CSS file for styling

const Footer = () => {
    return (
        <footer className="footer-container">
            <div className="icons-container">
                <a href="https://facebook.com/TheEntertainerJC" target="_blank" rel="noopener noreferrer" className="icon brands alt">
                    <FontAwesomeIcon icon={faFacebook} size='xl' style={{color: '#888'}} />
                </a>
                <a href="https://www.instagram.com/theentertainerjc/" target="_blank" rel="noopener noreferrer" className="icon brands alt">
                    <FontAwesomeIcon icon={faInstagram} size='xl' style={{color: '#888'}} />
                </a>
                <a href="mailto:contactus@teamentertainer.com" target="_blank" rel="noopener noreferrer" className="icon solid alt">
                    <FontAwesomeIcon icon={faEnvelope} size='xl' style={{color: '#888'}} />
                </a>
            </div>
            <div className="copyright-text">
                &copy; The Entertainer. All rights reserved.
            </div>
        </footer>
    );
};

export default Footer;
