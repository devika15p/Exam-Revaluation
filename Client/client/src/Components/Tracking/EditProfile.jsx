import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './EditProfile.css';

const EditProfile = () => {
    const [userData, setUserData] = useState({
        username: '',
        email: '',
        collegeName: '',
        branchName: '',
    });
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState('');
    const [successMessage, setSuccessMessage] = useState('');

    useEffect(() => {
        // Simulate fetching user data (replace with your actual API call)
        const fetchUserData = async () => {
            try {
                const response = await new Promise((resolve) => {
                    setTimeout(() => {
                        resolve({
                            username: 'testuser', // Replace with actual data
                            email: 'test@example.com',
                            collegeName: 'Example College',
                            branchName: 'Computer Science',
                        });
                    }, 500); // Simulate delay
                });

                setUserData(response);
                setLoading(false);
            } catch (err) {
                setError('Error fetching user data.');
                setLoading(false);
                console.error(err);
            }
        };

        fetchUserData();
    }, []);

    const handleChange = (e) => {
        setUserData({ ...userData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError('');
        setSuccessMessage('');

        try {
            // Simulate API call to update profile (replace with your actual API call)
            await new Promise((resolve) => {
                setTimeout(() => {
                    resolve();
                }, 500);
            });

            setSuccessMessage('Profile updated successfully!');
        } catch (err) {
            setError('Error updating profile.');
            console.error(err);
        }
    };

    if (loading) {
        return <div className="loading">Loading...</div>; // Or a loading spinner
    }

    if (error) {
        return <div className="error">{error}</div>;
    }

    return (
        <div className="edit-profile">
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-md-8">
                        <div className="card">
                            <div className="card-header">
                                <h2 className="text-center">Edit Profile</h2>
                            </div>
                            <div className="card-body">
                                {successMessage && (
                                    <div className="alert alert-success">{successMessage}</div>
                                )}
                                {error && <div className="alert alert-danger">{error}</div>}
                                <form onSubmit={handleSubmit}>
                                    <div className="mb-3">
                                        <label htmlFor="username" className="form-label">Username:</label>
                                        <input
                                            type="text"
                                            className="form-control"
                                            id="username"
                                            name="username"
                                            value={userData.username}
                                            onChange={handleChange}
                                            required
                                        />
                                    </div>
                                    <div className="mb-3">
                                        <label htmlFor="email" className="form-label">Email:</label>
                                        <input
                                            type="email"
                                            className="form-control"
                                            id="email"
                                            name="email"
                                            value={userData.email}
                                            onChange={handleChange}
                                            required
                                        />
                                    </div>
                                    <div className="mb-3">
                                        <label htmlFor="collegeName" className="form-label">College Name:</label>
                                        <input
                                            type="text"
                                            className="form-control"
                                            id="collegeName"
                                            name="collegeName"
                                            value={userData.collegeName}
                                            onChange={handleChange}
                                            required
                                        />
                                    </div>
                                    <div className="mb-3">
                                        <label htmlFor="branchName" className="form-label">Branch Name:</label>
                                        <input
                                            type="text"
                                            className="form-control"
                                            id="branchName"
                                            name="branchName"
                                            value={userData.branchName}
                                            onChange={handleChange}
                                            required
                                        />
                                    </div>
                                    <div className="d-grid gap-2">
                                        <button type="submit" className="btn btn-primary">
                                            Update Profile
                                        </button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default EditProfile;