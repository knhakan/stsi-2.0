import React from "react";
import "./Sidebar.css";

const Sidebar = (props) => {
  return (
    <div className={props.showSidebar ? "sidebar" : "sidebar remove"}>
      <div className="sidebar-item">
        <span className="sidebar-icon">
          <i className="fas fa-border-all"></i>
        </span>
        <p className="sidebar-text">Dashboard</p>
      </div>
      <div className="sidebar-item">
        <span className="sidebar-icon">
          <i className="fas fa-cube"></i>
        </span>
        <p className="sidebar-text">Offers</p>
      </div>
      <div className="sidebar-item">
        <span className="sidebar-icon">
          <i className="fas fa-download"></i>
        </span>
        <p className="sidebar-text">Offers Inbox</p>
      </div>
      <div className="sidebar-item">
        <span className="sidebar-icon">
          <i className="far fa-clipboard"></i>
        </span>
        <p className="sidebar-text">Requests</p>
      </div>
      <div className="sidebar-item">
        <span className="sidebar-icon">
          <i className="fas fa-download"></i>
        </span>
        <p className="sidebar-text">Requests Inbox</p>
      </div>
      <div className="sidebar-item">
        <span className="sidebar-icon">
          <i className="fas fa-store-alt"></i>
        </span>
        <p className="sidebar-text">Suppliers</p>
      </div>
      <div className="sidebar-item">
        <span className="sidebar-icon">
          <i className="fas fa-ship"></i>
        </span>
        <p className="sidebar-text">Shipping Companies</p>
      </div>
      <div className="sidebar-item">
        <span className="sidebar-icon">
          <i className="fas fa-train"></i>
        </span>
        <p className="sidebar-text">Freight Forwarders</p>
      </div>
      <div className="sidebar-item">
        <span className="sidebar-icon">
          <i className="fas fa-print"></i>
        </span>
        <p className="sidebar-text">Banks</p>
      </div>
      <div className="sidebar-item">
        <span className="sidebar-icon">
          <i className="fas fa-warehouse"></i>
        </span>
        <p className="sidebar-text">Warehouses</p>
      </div>
      <div className="sidebar-item">
        <span className="sidebar-icon">
          <i className="fas fa-user-md"></i>
        </span>
        <p className="sidebar-text">Agents</p>
      </div>
      <div className="sidebar-item">
        <span className="sidebar-icon">
          <i className="fas fa-city"></i>
        </span>
        <p className="sidebar-text">Clients</p>
      </div>
      <div className="sidebar-item">
        <span className="sidebar-icon hidden">
          <i className="fas fa-city"></i>
        </span>
        <p className="sidebar-text">Clients list</p>
      </div>
      <div className="sidebar-item">
        <span className="sidebar-icon hidden">
          <i className="fas fa-city"></i>
        </span>
        <p className="sidebar-text">Create Clients</p>
      </div>
      <div className="sidebar-item">
        <span className="sidebar-icon hidden">
          <i className="fas fa-city"></i>
        </span>
        <p className="sidebar-text">Clients Groups</p>
      </div>
      <div className="sidebar-item">
        <span className="sidebar-icon">
          <i className="fas fa-users"></i>
        </span>
        <p className="sidebar-text">Users</p>
      </div>
      <div className="sidebar-item">
        <span className="sidebar-icon">
          <i className="fas fa-unlock-alt"></i>
        </span>
        <p className="sidebar-text">Roles</p>
      </div>
      <div className="sidebar-item">
        <span className="sidebar-icon">
          <i className="fas fa-file-alt"></i>
        </span>
        <p className="sidebar-text">Data Manager</p>
      </div>
      <div className="sidebar-item">
        <span className="sidebar-icon">
          <i className="fas fa-suitcase"></i>
        </span>
        <p className="sidebar-text">Trading</p>
      </div>
      <div className="sidebar-item">
        <span className="sidebar-icon">
          <i className="fas fa-file"></i>
        </span>
        <p className="sidebar-text">Claims</p>
      </div>
    </div>
  );
};

export default Sidebar;
