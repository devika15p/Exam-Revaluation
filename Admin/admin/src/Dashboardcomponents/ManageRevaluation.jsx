import React from 'react';

function ManageRevaluation() {
  return (
    <div className="revaluation-content">
      <h3 className="text-white">Manage Revaluations</h3>
      <table className="table table-dark table-bordered mt-4">
        <thead>
          <tr>
            <th scope="col">Student ID</th>
            <th scope="col">Exam Name</th>
            <th scope="col">Status</th>
            <th scope="col">Action</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>1234</td>
            <td>Mathematics</td>
            <td>Pending</td>
            <td><button className="btn btn-warning">Reevaluate</button></td>
          </tr>
          <tr>
            <td>5678</td>
            <td>Science</td>
            <td>Completed</td>
            <td><button className="btn btn-secondary" disabled>Completed</button></td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default ManageRevaluation;
