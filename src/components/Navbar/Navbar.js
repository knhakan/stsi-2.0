import React from "react";
import "./Navbar.css";
import { useEffect, useState } from 'react';
import logo from '../../images/companyLogo.png';
const Navbar = () => {
  const [initialState, setInitialState] = useState('');

  useEffect(() => {
    fetch('/api/').then(res => {
      if (res.ok) {
        return res.json()
      }
    }).then(jsonResponse => setInitialState(jsonResponse))
  }, [])
  return (
    <div className="navbar-container">
      <div>
        <img src={logo} alt="Logo" className="navbar-logo-i" />
      </div>
      <div className="navbar-gap"></div>
      <div className="navbar">
        <div className="navbar-search">
          <input placeholder="Search" className="navbar-input" >
          </input>
        </div>
        <div className="navbar-profile">
          <div className="profile-box active">
            <i className="far fa-bell"></i>
            <i className="fas fa-circle notification"></i>
          </div>
          <div className="profile-box">
            <i className="far fa-user"></i>
          </div>
          <div className="profile-info">
            <p className="profile-header">
              {initialState.user} <i className="fas fa-angle-down profile-dropdown"></i>
            </p>
            <p className="profile-subheader">{initialState.role}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
