import React from 'react'
import "./Header.css"
import Face6Icon from '@mui/icons-material/Face6';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
const Header = () => {
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
             <img src="./logo-image-removebg-preview.png" alt='Image'/>
          </div>
          <nav className='header-menu'>
              <ul className='menu-bar'>
              <li className='language-logo'><img src='./Flag_of_India.svg.webp'/><span> EN</span></li>
              <li>Returns & Orders</li>
                 <li><Face6Icon sx={{color: 'aqua', fontSize: 30}}/></li>
                 <li><ShoppingCartIcon sx={{color: 'aqua',fontSize: 30}}/></li>
              </ul>
          </nav>
       </div>
    </div>
  )
}

export default Header;
