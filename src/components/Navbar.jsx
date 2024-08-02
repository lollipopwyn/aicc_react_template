import React, { useState } from 'react';
import './navbar.css';
import { Link } from 'react-router-dom';
import { authLink, navItems } from '../constants/data';
import ModeCtrl from './ModeCtrl';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  return (
    <nav className="backdrop-blur-lg">
      <div className="container relative">
        <div className="nav_wrapper">
          <div className="logo">
            <div className="logo_symbol">
              <span className="logo_dot"></span>
              <span className="logo_bottom"></span> {/*내가 만듬*/}
            </div>
            <span className="logo_title lg:text-xl md:text-lg">AceDot.Dev</span>
          </div>
          <ul className="navi hidden lg:flex">
            {navItems.map((item, idx) => (
              <li key={idx}>
                <Link to={item.to}>{item.label}</Link>
              </li>
            ))}
          </ul>
          <div className="sub_link_wrapper flex">
            <div className="sub_links hidden lg:flex">
              {authLink.map((item, idx) => (
                <Link
                  to={item.to}
                  key={idx}
                  className={`${
                    idx === 1
                      ? 'bg-gradient-to-r from-slate-800 to-slate-600 text-white dark:text-white'
                      : 'border'
                  }`}
                >
                  {item.label}
                </Link>
              ))}
            </div>
            <div className="menu_icon lg:hidden">
              <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
                {mobileMenuOpen ? <X /> : <Menu />}
              </button>{' '}
            </div>
            <ModeCtrl />
          </div>
        </div>

        {mobileMenuOpen && (
          <div className="sub_nav_mobile absolute bg-white w-full top-full left-0 dark:bg-gray-600 mt-[1px] lg:hidden">
            <ul className="navi lg:flex">
              {navItems.map((item, idx) => (
                <li
                  key={idx}
                  className="py-4 border-b border-gray-500 w-full text text-center"
                >
                  <Link to={item.to} className="block w-full h-full">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>

            <div className="sub_links flex py-4 gap-2 justify-center border-b border-slate-600">
              {authLink.map((item, idx) => (
                <Link
                  to={item.to}
                  key={idx}
                  className={`${
                    idx === 1
                      ? 'bg-gradient-to-r from-slate-800 to-slate-600 text-white dark:text-white'
                      : 'border'
                  }`}
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
