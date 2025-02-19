import React from 'react';

function ViewRegistration() {
  return (
    <div>
      <h3 style={{ textAlign: 'center', marginBottom: '20px', color: 'white' }}>View Registrations</h3>
      <table className="table table-dark table-bordered" style={{ color: 'white' }}>
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>College Name</th>
            <th>Branch Name</th>
            <th>Subject</th>
            <th>Password</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>John Doe</td>
            <td>johndoe@example.com</td>
            <td>XYZ University</td>
            <td>Computer Science</td>
            <td>Mathematics</td>
            <td>*******</td>
          </tr>
          <tr>
            <td>Jane Smith</td>
            <td>janesmith@example.com</td>
            <td>ABC College</td>
            <td>Mechanical Engineering</td>
            <td>Physics</td>
            <td>*******</td>
          </tr>
          <tr>
            <td>Michael Brown</td>
            <td>michaelb@example.com</td>
            <td>LMN Institute</td>
            <td>Civil Engineering</td>
            <td>Chemistry</td>
            <td>*******</td>
          </tr>
          <tr>
            <td>Emily Davis</td>
            <td>emilydavis@example.com</td>
            <td>PQR University</td>
            <td>Electrical Engineering</td>
            <td>Biology</td>
            <td>*******</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default ViewRegistration;
