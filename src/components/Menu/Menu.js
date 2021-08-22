import React from "react";
import "./Menu.css";

const Menu = () => {
  return (
    <div className="menu">
      <div className="menu-top">
        <div className="menu-info">
          <div className="menu-title">
            <h1 className="menu-header">Clients</h1>
            <p className="menu-subheader">Lorem ipsum dolor sit amet</p>
          </div>
          <i className="fas fa-filter menu-filter"></i>
        </div>
        <div className="menu-search">
          <input placeholder="Search client" className="menu-input" />
        </div>
        <div className="menu-buttons">
          <div className="menu-button">+ New Client</div>
        </div>
      </div>
      <div className="menu-bottom">
        <div className="menu-selections">
          <div className="menu-select">
            <span className="menu-select-amount">79</span> All Clients
          </div>
          <div className="menu-select">
            <span className="menu-select-amount">29</span> My Clients
          </div>
          <div className="menu-select selected">
            <span className="menu-select-amount">32</span> Clients from App
          </div>
          <div className="menu-select">
            <span className="menu-select-amount">17</span> Clients from Website
          </div>
        </div>
        <div className="menu-bottom-buttons">
          <div className="menu-bottom-button">
            <i className="far fa-user"></i>+ New Client
          </div>
          <i className="fas fa-bars menu-icon"></i>
          <i className="fas fa-th-large menu-icon active"></i>
        </div>
      </div>
    </div>
  );
};

export default Menu;
