import React from 'react';

function Dashboard() {
  return (
    <div className="dashboard-content">
      <div className="row mt-4">
        <div className="col-md-4">
          <div className="card text-white bg-dark mb-3">
            <div className="card-body">
              <h5 className="card-title">Total Exams</h5>
              <p className="card-text">300</p>
            </div>
          </div>
        </div>
        <div className="col-md-4">
          <div className="card text-white bg-dark mb-3">
            <div className="card-body">
              <h5 className="card-title">Pending Revaluations</h5>
              <p className="card-text">50</p>
            </div>
          </div>
        </div>
        <div className="col-md-4">
          <div className="card text-white bg-dark mb-3">
            <div className="card-body">
              <h5 className="card-title">Completed Revaluations</h5>
              <p className="card-text">250</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
