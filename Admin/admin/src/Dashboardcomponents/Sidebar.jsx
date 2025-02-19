import React from 'react';
import { Link } from 'react-router-dom';

function Sidebar() {
  return (
    <div className="sidebar bg-dark text-white" style={{ width: '250px', height: '100vh' }}>
      <div className="sidebar-header text-center py-4">
        <h4>Exam Revaluation</h4>
      </div>
      <ul className="list-unstyled">
        <li>
          <Link to="/" className="text-white p-3 d-block">Dashboard</Link>
        </li>
        <li>
          <Link to="/revaluation" className="text-white p-3 d-block">Manage Revaluation</Link>
        </li>
        <li>
          <Link to="/results" className="text-white p-3 d-block">View Results</Link>
        </li>
      </ul>
    </div>
  );
}

export default Sidebar;
