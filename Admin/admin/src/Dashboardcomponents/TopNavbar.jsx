import React from 'react';

function TopNavbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container-fluid">
        <a className="navbar-brand" href="#">Admin Dashboard</a>
        <div className="d-flex">
          <button className="btn btn-outline-light mx-2">Profile</button>
          <button className="btn btn-outline-light mx-2">Logout</button>
        </div>
      </div>
    </nav>
  );
}

export default TopNavbar;
