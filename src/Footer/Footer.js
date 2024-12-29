   import React from 'react';
import './Footer.css'; 
import ArrowRightIcon from '@mui/icons-material/KeyboardDoubleArrowRight';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import CallIcon from '@mui/icons-material/Call';
import EmailIcon from '@mui/icons-material/Email';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
       
      <div className='logo'>
       <img src="./logo-image-removebg-preview.png" alt='logo'/>
     
      </div>
      <div className='links-info'>
<div className='usefull'><h2>Useful Links</h2>
<ul>
<li> <a href="#home"><ArrowRightIcon />Home</a></li>
<li> <a href="#about"> <ArrowRightIcon />About Us</a></li>
<li><a href="gallery"><ArrowRightIcon />Gallery</a></li>
<li><a href="contact"><ArrowRightIcon />Contact</a></li>
</ul>

</div>
<div className='follow'><h2> Follow Us</h2>
<ul>
<li> <a href="#facebook"><FacebookIcon/> Facebook</a></li>
<li> <a href="#instagram"><InstagramIcon />Instagram</a></li>
<li><a href="linkedin"><LinkedInIcon />Linkedin</a></li>
</ul>
</div>
<div className='address'><h2>Address</h2>
<ul>
  <li> <a href="#address"><LocationOnIcon />Datta Mandir ward, Hinganghat</a></li>
  <li><a href="#number"> <CallIcon />9823883584</a></li>
  <li><a href="#mail"><EmailIcon />sahilparbat24@gmail.com</a></li>
</ul>

</div>

      </div>


        
      </div>
      <div className='footer-bottom'>
      <p>&copy; 2024 S & Y Fashion Point. All rights reserved.</p>
      </div>
    </footer>

  );
};

export default Footer;
