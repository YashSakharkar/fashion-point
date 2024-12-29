import React, { useState } from 'react'
import "./Header.css"
import Face6Icon from '@mui/icons-material/Face6';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
const Header = () => {
   const [visible, setVisisble] = useState(false);
   const [selectedLanguage, setSelectedLanguage] = useState("");

   const handleLanguageClick = (language) => {
      setSelectedLanguage(language);
   };

   return (
      <div className='header'>
         <div className='container'>
            <nav className='header-menu'>
               <ul className='menu-bar'>
                  <li>HOME</li>
                  <li>MENS</li>
                  <li>WOMENS</li>
                  <li>KIDS</li>
                  <li>ACCESORIES</li>
               </ul>
            </nav>
            <div className='logo-img'>
               <img src="./logo-image-removebg-preview.png" alt='Image' />
            </div>
            <nav className='header-menu'>
               <ul className='menu-bar'>
                  <li className='language-logo' onMouseEnter={() => { setVisisble(true) }} onMouseLeave={() => { setVisisble(false) }}><img src='./Flag_of_India.svg.webp' /><span> {selectedLanguage ? selectedLanguage : <span>English</span>}</span><KeyboardArrowDownIcon />
                     {
                        visible && (
                           <ul className='languages-block'>
                              <li onClick={() => handleLanguageClick("English")}>English</li>
                              <li onClick={() => handleLanguageClick("Hindi")}>Hindi</li>
                              <li onClick={() => handleLanguageClick("Telugu")}>Telugu</li>
                              <li onClick={() => handleLanguageClick("Kannada")}>Kannada</li>
                              <li onClick={() => handleLanguageClick("Marathi")}>Marathi</li>
                           </ul>)
                     }</li>
                  <li>Returns & Orders</li>
                  <li><Face6Icon sx={{ color: 'aqua', fontSize: 30 }} /></li>
                  <li><ShoppingCartIcon sx={{ color: 'aqua', fontSize: 30 }} /><sup>2</sup>
                  </li>
               </ul>
            </nav>
         </div>
      </div>
   )
}

export default Header;
