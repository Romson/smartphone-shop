import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import logo from '../logo.png';
import styled from 'styled-components';
import {ButtonContainer} from './style.js';

// 
const Button = styled.button `${ButtonContainer};`;

export default class Navbar extends Component {
  render() {
    return (
      <nav className='navbar navbar-expand-sm navbar-dark px-sm-5'>
         
        {/* https://www.iconfinder.com/icons/1243689/call_phone_icon
        Creative Commons (Attribution 3.0 Unported);
        https://www.iconfinder.com/Makoto_msk */}

        {/* Logo */}
        <Link to='/'>
          <img src={logo} alt='store' className='navbar-brand' />
        </Link>       

        {/* Routes (navlinks) */}
        <ul className='navbar-nav align-items-center'>

          <li className='nav-item ml-5'>
            <Link to='/' className='nav-link'>
            <i class="fas fa-mobile-alt"></i> Products
            </Link>
          </li>

          <li className='nav-item ml-5'>
            <Link to='/about' className='nav-link'>
            <i class="far fa-address-card"></i> About us
            </Link>
          </li>

          <li className='nav-item ml-5'>
            <Link to='/blog' className='nav-link'>
            <i class="fas fa-rss-square"></i> Blog
            </Link>
          </li>

          <li className='nav-item ml-5'>
            <Link to='/contact' className='nav-link'>
            <i class="fas fa-at"></i> Contact
            </Link>
          </li>

        </ul>        

        {/* Cart */}
        <Link to='/cart' className='ml-auto'>
          <ButtonContainer>
            <span className='mr-2'>
              <i class="fas fa-cart-plus"></i> My cart
            </span>
          </ButtonContainer>
        </Link>

      </nav>
    )
  }
}