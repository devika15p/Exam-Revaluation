import React, { useState } from 'react';

const ViewRegistration = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        collegeName: '',
        branchName: '',
        subject: '',
        password: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Form Data Submitted:', formData);
        // You can add your form submission logic here
    };

    return (
        <div className="container" style={{ backgroundColor: '#343a40', color: '#ffffff', padding: '20px', borderRadius: '5px', marginTop: '50px' }}>
            <h2 className="text-center">Registration Form</h2>
            <form onSubmit={handleSubmit}>
                <div className="mb-3">
                    <label htmlFor="name" className="form-label">Name</label>
                    <input type="text" className="form-control" id="name" name="name" value={formData.name} onChange={handleChange} required />
                </div>
                <div className="mb-3">
                    <label htmlFor="email" className="form-label">Email</label>
                    <input type="email" className="form-control" id="email" name="email" value={formData.email} onChange={handleChange} required />
                </div>
                <div className="mb-3">
                    <label htmlFor="collegeName" className="form-label">College Name</label>
                    <input type="text" className="form-control" id="collegeName" name="collegeName" value={formData.collegeName} onChange={handleChange} required />
                </div>
                <div className="mb-3">
                    <label htmlFor="branchName" className="form-label">Branch Name</label>
                    <input type="text" className="form-control" id="branchName" name="branchName" value={formData.branchName} onChange={handleChange} required />
                </div>
                <div className="mb-3">
                    <label htmlFor="subject" className="form-label">Subject</label>
                    <input type="text" className="form-control" id="subject" name="subject" value={formData.subject} onChange={handleChange} required />
                </div>
                <div className="mb-3">
                    <label htmlFor="password" className="form-label">Password</label>
                    <input type="password" className="form-control" id="password" name="password" value={formData.password} onChange={handleChange} required />
                </div>
                <button type="submit" className="btn btn-primary">Register</button>
            </form>
        </div>
    );
};

export default ViewRegistration;