import React from 'react';
import './Footer.css'; 
import { FaFacebook, FaInstagram } from 'react-icons/fa';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <ul className="footer-links">
          <li><a href="#about">About</a></li>
          <li><a href="#services">Services</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
        <div className="footer-social">
          <a href="https://facebook.com" target="_blank" rel='noreferrer' >
            {/* <FaFacebook /> */}
            <FacebookIcon/>
          </a>
          <a href="https://instagram.com" target="_blank" rel='noreferrer' >
          {/* <FaInstagram/> */}
          <InstagramIcon/>
          </a>
         
        </div>
        <p>&copy; 2024 S & Y Fashion Point. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
