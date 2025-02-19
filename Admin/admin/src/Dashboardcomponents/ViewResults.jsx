import React from 'react';

function ViewResults() {
  return (
    <div className="results-content">
      <h3 className="text-white">View Exam Results</h3>
      <table className="table table-dark table-bordered mt-4">
        <thead>
          <tr>
            <th scope="col">Student ID</th>
            <th scope="col">Subject</th>
            <th scope="col">Marks Obtained</th>
            <th scope="col">Action</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>1234</td>
            <td>Mathematics</td>
            <td>80</td>
            <td><button className="btn btn-info">View Details</button></td>
          </tr>
          <tr>
            <td>5678</td>
            <td>Science</td>
            <td>75</td>
            <td><button className="btn btn-info">View Details</button></td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default ViewResults;
