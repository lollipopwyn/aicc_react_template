import React from 'react';
import './navbar.css';
import { Link } from 'react-router-dom';
import { authLink, navItems } from '../constants/data';
import ModeCtrl from './ModeCtrl';

const Navbar = () => {
  return (
    <nav>
      <div className="container">
        <div className="nav_wrapper">
          <div className="logo">
            <div className="logo_symbol">
              <span className="logo_dot"></span>
              <span className="logo_bottom"></span> {/*내가 만듬*/}
            </div>
            <span className="logo_title">AceDot.Dev</span>
          </div>
          <ul className="navi">
            {navItems.map((item, idx) => (
              <li key={idx}>
                <Link to={item.to}>{item.label}</Link>
              </li>
            ))}
          </ul>
          <div className="sub_links">
            {authLink.map((item, idx) => (
              <Link
                to={item.to}
                key={idx}
                className={`${
                  idx === 1
                    ? 'bg-gradient-to-r from-slate-500 to-slate-700'
                    : 'border'
                }`}
              >
                {item.label}
              </Link>
            ))}
            <ModeCtrl />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
