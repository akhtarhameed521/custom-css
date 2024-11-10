"use client"
import Image from 'next/image';
import React, { useState } from 'react';
import Link from 'next/link';
import { FiShoppingCart, FiMenu, FiX } from "react-icons/fi"; 
import { FaCar } from "react-icons/fa";
import { images } from '..';
import './style.css';

export default function Navbar({ className }) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <div className={` navbar`}>
      <div className='navbar-container'>
        
        {/* Logo */}
        <div >
          <Image src={images.logo} height={150} width={150} alt="Logo" />
        </div>

        {/* Desktop Menu */}
        <ul className='desktop-menu'>
          <Link href={'/'}><li>home</li></Link>
          <Link href={'/about'}><li>about</li></Link>
          <Link href={'/contact'}><li>contact</li></Link>
        </ul>

        {/* Icons and Contact Button */}
        <div className='navbar-icons'>
          {/* Shopping Cart Icon */}
          <div className='shopping-cart'>
            <FiShoppingCart />
          </div>

          {/* Contact Us Button (Hidden on Small Screens) */}
          <button className='contact-btn'>
            <FaCar />
            <span>Contact Us</span>
          </button>

          {/* Mobile Menu Toggle */}
          <div className='mobile-menu-toggle' onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
            {isMobileMenuOpen ? <FiX /> : <FiMenu />}
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className='mobile-menu'>
          <Link href={'/'} onClick={() => setIsMobileMenuOpen(false)} className="mobile-menu-item">Home</Link>
          <Link href={'/about'} onClick={() => setIsMobileMenuOpen(false)} className="mobile-menu-item">About</Link>
          <Link href={'/contact'} onClick={() => setIsMobileMenuOpen(false)} className="mobile-menu-item">Contact</Link>
          <button className='mobile-contact-btn' onClick={() => setIsMobileMenuOpen(false)}>
            <FaCar />
            <span>Contact Us</span>
          </button>
        </div>
      )}
    </div>
  );
}
